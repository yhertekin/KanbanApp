import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todosSlice";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";
import styles from "./TodoInput.module.css";

const TodoInput = ({ className }) => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.items);
    const [dropdownValue, setDropdownValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const dropdownItems = users.map((user) => ({
        key: user.id,
        value: user.username,
    }));

    const buttonHandler = () => {
        if (inputValue === "") {
            setWarningMessage("Todo field can not be empty!");
            return;
        }
        if (dropdownValue === "") {
            setWarningMessage("Please select a user!");
            return;
        }

        dispatch(addTodo({ task: inputValue, userId: dropdownValue }));
        setInputValue("");
        setDropdownValue("");
        setWarningMessage("");
    };

    return (
        <div>
            <div className={`${styles["input__grid"]} ${className ?? ""}`}>
                <Input
                    placeholder="Todo"
                    variant="primary"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="col-span-2"
                />

                <Dropdown
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                    className="flex"
                    placeholder="Select a user"
                    items={dropdownItems}
                />
                <Button
                    children="Add"
                    variant="primary"
                    onClick={buttonHandler}
                />
            </div>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="warning"
                    className="mt-1"
                />
            )}
        </div>
    );
};

export default TodoInput;
