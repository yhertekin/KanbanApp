//custom
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { addUser } from "../../redux/usersSlice";
//third
import { useState } from "react";
import { useDispatch } from "react-redux";
//css
import "./UserCreateForm.css";

const UserCreateForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    const buttonHandler = () => {
        if (input === "") {
            setWarningMessage("User field can not be empty!");
            return;
        }
        dispatch(addUser(input));
        setInput("");
        setWarningMessage("");
    };

    const keyHandler = (e) => e.key === "Enter" && buttonHandler();

    return (
        <div>
            <div className="user__create__form">
                <Input
                    className="col-span-3"
                    type="text"
                    placeholder="User"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={keyHandler}
                />
                <Button onClick={buttonHandler} variant="primary">
                    Add
                </Button>
            </div>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="danger"
                    className="mt-1"
                />
            )}
        </div>
    );
};

export default UserCreateForm;
