import { useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Alert from "../../components/Alert";
import { addUser } from "../../redux/usersSlice";
//third
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//css
import "./UserRegisterForm.css";

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
