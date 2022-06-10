import { useEffect, useState } from "react";
//custom
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { useUser } from "../../context/UserContext";
//third
import { useNavigate } from "react-router-dom";
//css
import "./UserLoginForm.css";

const formInitial = { email: "", password: "" };

const UserLoginForm = () => {
    const [loginForm, setLoginForm] = useState(formInitial);
    const [warningMessage, setWarningMessage] = useState("");

    const { users, loggedInUser, loginUser } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser?.username) {
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
        console.log(users);
        const user = users?.find((user) => user.email === loginForm.email);
        console.log(user);
        if (!user || loginForm.password !== user.password) {
            setWarningMessage("Email or password is wrong! Failed to login.");
            return;
        }

        setWarningMessage("");
        loginUser(user.id);
        setLoginForm(formInitial);
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
            <Button
                onClick={onSubmitHandler}
                variant="primary"
                className="py-1 px-2"
            >
                Login
            </Button>
        </div>
    );
};

export default UserLoginForm;
