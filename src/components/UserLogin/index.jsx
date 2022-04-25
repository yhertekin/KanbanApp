import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../redux/usersSlice";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";

import "./UserLogin.css";

const UserLogin = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [warningMessage, setWarningMessage] = useState("");

    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const users = useSelector((state) => state.users.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser.username) {
            navigate("/");
        }
    }, [loggedInUser]);

    const onChangeHandler = (e) => {
        setLoginForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = () => {
        if (
            Object.keys(loginForm).find((key) => loginForm[key] === "")
                ?.length > 0
        ) {
            setWarningMessage("Please fill in all fields");
            return;
        }

        const user = users.find((user) => user.email === loginForm.email);
        if (!user || loginForm.password !== user.password) {
            setWarningMessage("Email or password is wrong! Failed to login.");
        } else {
            dispatch(loginUser(user));
            setWarningMessage("");
        }
    };

    return (
        <div className="login__form">
            {warningMessage && (
                <Alert message={warningMessage} variant="danger" />
            )}
            <Input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={onChangeHandler}
                placeholder="Email"
            />
            <Input
                name="password"
                type="password"
                value={loginForm.password}
                onChange={onChangeHandler}
                placeholder="Password"
            />
            <Button onClick={onSubmitHandler} variant="primary">
                Login
            </Button>
        </div>
    );
};

export default UserLogin;
