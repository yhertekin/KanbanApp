import { useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import { useUser } from "../../context/UserContext";
//third
import { useNavigate } from "react-router-dom";
//css
import "./UserRegisterForm.css";

const formInitial = {
    username: "",
    email: "",
    password: "",
};

const UserRegisterForm = () => {
    const [warningMessage, setWarningMessage] = useState("");
    const [registerForm, setRegisterForm] = useState(formInitial);

    const { users, createUser } = useUser();

    const navigate = useNavigate();

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
        if (users?.find((user) => user.email === registerForm.email)) {
            setWarningMessage("Email already registered!");
            return;
        }
        setWarningMessage("");
        createUser(registerForm);
        setRegisterForm(formInitial);
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

            <Button
                onClick={onSubmitHandler}
                variant="primary"
                className="py-1 px-2"
            >
                Register
            </Button>
        </div>
    );
};

export default UserRegisterForm;
