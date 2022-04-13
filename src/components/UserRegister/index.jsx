import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/usersSlice";

import Button from "../Button";
import Input from "../Input";
import Dropdown from "../Dropdown";

import styles from "./UserRegister.module.css";

const UserRegister = () => {
    const dispatch = useDispatch();
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        userType: "",
    });

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

    return (
        <div className={styles.register}>
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
            <Button onClick={() => dispatch(addUser(registerForm))}>
                Register
            </Button>
        </div>
    );
};

export default UserRegister;
