import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todosSlice";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";
import Modal from "../Modal";

import "./TodoInput.css";

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
        <Modal cancelModal={cancelButtonHandler}>
            <div className={`todo__input ${className ?? ""}`}>
                {warningMessage && (
                    <Alert
                        message={warningMessage}
                        variant="warning"
                        className="mb-2"
                    />
                )}
                <div>
                    <Input
                        placeholder="Todo"
                        variant="primary"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <Dropdown
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                        className="mt-2"
                        placeholder="Select a user"
                        items={dropdownItems}
                    />
                    <div className="todo__input__footer">
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
        </Modal>
    );
};

export default TodoInput;
