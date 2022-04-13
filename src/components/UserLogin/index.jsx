import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/usersSlice";

import Input from "../Input";
import Button from "../Button";

import styles from "./UserLogin.module.css";

const UserLogin = () => {
    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = useState({ email: "", password: "" });

    const onChangeHandler = (e) => {
        setLoginForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className={styles.login}>
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
            <Button onClick={() => dispatch(loginUser(loginForm))}>
                Login
            </Button>
        </div>
    );
};

export default UserLogin;
