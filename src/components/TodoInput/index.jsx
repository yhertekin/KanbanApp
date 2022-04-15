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
        cancelButtonHandler();
    };

    return (
        <div
            className="absolute flex justify-center items-center 
        bg-black w-screen h-screen
         top-0 left-0 bg-opacity-50
         "
        >
            <div className={`${styles["todo__input"]} ${className ?? ""}`}>
                {warningMessage && (
                    <Alert
                        message={warningMessage}
                        variant="warning"
                        className="mb-2"
                    />
                )}
                <div className="">
                    <Input
                        placeholder="Todo"
                        variant="primary"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className=""
                    />

                    <Dropdown
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                        className="mt-2"
                        placeholder="Select a user"
                        items={dropdownItems}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <Button
                            children="Cancel"
                            variant="danger"
                            onClick={() => cancelButtonHandler(false)}
                            className="w-5/12"
                        />
                        <Button
                            children="Add"
                            variant="primary"
                            onClick={addButtonHandler}
                            className="w-5/12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoInput;
