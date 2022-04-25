import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaEdit, FaTrashAlt } from "react-icons/fa";

import { editTodo, removeTodo } from "../../redux/todosSlice";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Alert from "../Alert";
import ColorPicker from "../ColorPicker";
import IconButton from "../IconButton";
import Modal from "../Modal";
import DialogBox from "../DialogBox";

import "./TodoEdit.css";

const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null;
};

const TodoEdit = ({ todo }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(todo.task);
    const [dropdownValue, setDropdownValue] = useState(todo.userId);
    const [warningMessage, setWarningMessage] = useState("");
    const [showTodoRemoveAlert, setShowTodoRemoveAlert] = useState(false);
    const users = useSelector((state) => state.users.items);
    const user = users.find((user) => user.id === todo.userId);
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const dropdownChangeHandler = (e) => setDropdownValue(e.target.value);
    const inputChangeHandler = (e) => setInputValue(e.target.value);
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
    };

    const dropdownItems = users.map((user) => ({
        key: user.id,
        value: user.username,
    }));

    const TrashIcon = () => (
        <IconButton
            Icon={FaTrashAlt}
            onClick={() => setShowTodoRemoveAlert(true)}
        />
    );

    return (
        <div className="todo__edit pl-2">
            <div className="todo__edit__content">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex justify-start items-center mr-10">
                        <FaUser className="mr-1" /> Task for
                        <Link
                            to={`/profile/${user.id}`}
                            className="font-bold ml-1"
                        >
                            {user.username}
                        </Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center opacity-50">
                            <FaCalendarAlt className="mr-1" />
                            Created at {formatDate(todo.createdAt)}
                        </div>

                        <div className="ml-5">
                            {todo.status === "review" &&
                            loggedInUser?.userType === "admin" ? (
                                <>
                                    <TrashIcon />
                                    {showTodoRemoveAlert && (
                                        <Modal
                                            showModal={setShowTodoRemoveAlert}
                                        >
                                            <DialogBox
                                                text="Are you sure to remove?"
                                                setCancelButton={
                                                    setShowTodoRemoveAlert
                                                }
                                                setConfirmButton={() =>
                                                    dispatch(
                                                        removeTodo(todo.id)
                                                    )
                                                }
                                            />
                                        </Modal>
                                    )}
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="grid gap-1 mt-1">
                    {warningMessage && (
                        <Alert message={warningMessage} variant="danger" />
                    )}
                    <ColorPicker todo={todo} />
                    <Input
                        value={inputValue}
                        onChange={inputChangeHandler}
                        placeholder="Edit todo"
                    />
                    <Dropdown
                        placeholder="Select a user"
                        value={dropdownValue}
                        onChange={dropdownChangeHandler}
                        items={dropdownItems}
                    />
                    <Button
                        variant="primary"
                        onClick={buttonHandler}
                        className="flex justify-center items-center "
                    >
                        <FaEdit className="mr-1" />
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TodoEdit;
