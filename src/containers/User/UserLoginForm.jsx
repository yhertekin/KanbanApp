import { useEffect, useState } from "react";
//custom
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { loginUser } from "../../redux/usersSlice";
import { GetAllUsers, GetLoggedInUser } from "../../selectors";
//third
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//css
import "./UserLoginForm.css";

const UserLoginForm = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [warningMessage, setWarningMessage] = useState("");

    const loggedInUser = GetLoggedInUser();
    const users = GetAllUsers();

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
        <div className="user__login__form">
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

export default UserLoginForm;
