import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todosSlice";

import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";
import LabelPicker from "../LabelPicker";

import { GetAllUsers } from "../../selectors";

import "./TodoInput.css";
import LabelList from "../LabelList";

const TodoCreateForm = ({ className, setShowTodoInput }) => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const [labelIdList, setLabelIdList] = useState([]);

    const users = GetAllUsers();

    const dropdownItems = users.map((user) => ({
        key: user.id,
        value: user.username,
    }));

    const dropdownChangeHandler = (e) => setDropdownValue(e.target.value);
    const inputChangeHandler = (e) => setInputValue(e.target.value);
    const showTodoHandler = (e) => setShowTodoInput(false);

    const labelHandler = (e, labelId) => {
        const isLabelCurrent = labelIdList.find((id) => id === labelId);
        console.log("event: ", e);

        if (isLabelCurrent) {
            setLabelIdList((prevState) => [
                ...prevState.filter((id) => id !== labelId),
            ]);
            e.target.classList.remove("opacity-50");
        } else {
            setLabelIdList((prevState) => [...prevState, labelId]);
            e.target.classList.add("opacity-50");
        }
    };

    const addButtonHandler = () => {
        if (inputValue === "") {
            setWarningMessage("Todo field can not be empty!");
            return;
        }
        if (dropdownValue === "") {
            setWarningMessage("Please select a user!");
            return;
        }

        dispatch(
            addTodo({
                task: inputValue,
                userId: dropdownValue,
                labelIdList: labelIdList,
            })
        );
        setInputValue("");
        setDropdownValue("");
        setWarningMessage("");
        setShowTodoInput(false);
    };

    return (
        <div className={`todo-create-form ${className ?? ""}`}>
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
                    onChange={inputChangeHandler}
                />

                <Dropdown
                    value={dropdownValue}
                    onChange={dropdownChangeHandler}
                    className="mt-2"
                    placeholder="Select a user"
                    items={dropdownItems}
                />
                <LabelList labelIdList={labelIdList} />
                <LabelPicker labelHandler={labelHandler} />

                <div className="todo-create-form__footer">
                    <Button
                        children="Cancel"
                        variant="danger"
                        onClick={showTodoHandler}
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
    );
};

export default TodoCreateForm;
