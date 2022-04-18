import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editTodo } from "../../redux/todosSlice";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Alert from "../Alert";

import "./EditTodo.css";

const EditTodo = ({ todo, className, setEdit }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(todo.task);
    const [dropdownValue, setDropdownValue] = useState(todo.userId);
    const users = useSelector((state) => state.users.items);
    const [warningMessage, setWarningMessage] = useState("");

    const buttonHandler = () => {
        if (!inputValue) {
            setWarningMessage("Please provide a task!");
            return;
        }
        if (!dropdownValue) {
            setWarningMessage("Please select a user!");
            return;
        }
        dispatch(
            editTodo({
                id: todo.id,
                task: inputValue,
                userId: dropdownValue,
            })
        );
        setWarningMessage("");
        setEdit((prevState) => !prevState);
    };

    return (
        <div className={`edit ${className ?? ""}`}>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="danger"
                    className="w-full mb-1"
                />
            )}
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Edit todo"
            />
            <Dropdown
                placeholder="Select a user"
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
                items={users.map((user) => ({
                    key: user.id,
                    value: user.username,
                }))}
            />
            <Button
                children="Edit"
                className="w-full"
                onClick={buttonHandler}
            />
        </div>
    );
};

export default EditTodo;
