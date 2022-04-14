import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todosSlice";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";
import styles from "./TodoInput.module.css";

const TodoInput = ({ className, cancelButtonHandler }) => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.items);
    const [dropdownValue, setDropdownValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const dropdownItems = users.map((user) => ({
        key: user.id,
        value: user.username,
    }));

    const addButtonHandler = () => {
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
        <div className="absolute flex justify-center items-center bg-black w-screen h-screen top-0 left-0 bg-opacity-50">
            <div className={`${styles["todo__input"]} ${className ?? ""}`}>
                {warningMessage && (
                    <Alert message={warningMessage} variant="warning" />
                )}
                <div className="">
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
                        variant="secondary"
                        onClick={addButtonHandler}
                    />
                    <Button
                        children="Cancel"
                        variant="primary"
                        onClick={() => cancelButtonHandler(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoInput;
