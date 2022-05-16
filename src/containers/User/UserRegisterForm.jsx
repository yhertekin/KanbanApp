import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser } from "../../redux/usersSlice";
import Button from "../Button";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Alert from "../Alert";

import "./UserRegister.css";

const UserRegisterForm = () => {
    const [warningMessage, setWarningMessage] = useState("");
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        userType: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userTypes = [
        { key: "user", value: "user" },
        { key: "admin", value: "admin" },
    ];

    const onChangeHandler = (e) => {
        setRegisterForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = () => {
        if (
            Object.keys(registerForm).find((key) => registerForm[key] === "")
                ?.length > 0
        ) {
            setWarningMessage("Please fill in all fields");
            return;
        }
        setWarningMessage("");
        dispatch(addUser(registerForm));
        navigate("/login");
    };

    return (
        <div className="user__register__form">
            {warningMessage && (
                <Alert message={warningMessage} variant="danger" />
            )}
            <Input
                name="username"
                value={registerForm.username}
                onChange={onChangeHandler}
                placeholder="Username"
            />
            <Input
                name="email"
                type="email"
                value={registerForm.email}
                onChange={onChangeHandler}
                placeholder="Email"
            />
            <Input
                name="password"
                type="password"
                value={registerForm.password}
                onChange={onChangeHandler}
                placeholder="Password"
            />
            <Dropdown
                name="userType"
                value={registerForm.userType}
                onChange={onChangeHandler}
                placeholder="Select user type"
                items={userTypes}
            />
            <Button onClick={onSubmitHandler} variant="primary">
                Register
            </Button>
        </div>
    );
};

export default UserRegisterForm;
