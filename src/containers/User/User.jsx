import { useState } from "react";
//custom
import TodoList from "../Todo/TodoList";
import Alert from "../../components/Alert";
import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";
import { removeUser } from "../../redux/usersSlice";
import {
    GetAllTodos,
    GetCurrentProjectTodos,
    GetLoggedInUser,
} from "../../selectors";
//third
import { useDispatch } from "react-redux";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
//css
import "./User.css";

const User = ({ user }) => {
    const dispatch = useDispatch();
    const [showTodos, setShowTodos] = useState(false);
    const [showUserRemoveAlert, setShowUserRemoveAlert] = useState(false);

    const todoList = GetCurrentProjectTodos();
    const loggedInUser = GetLoggedInUser();

    const todos = todoList.filter((todo) => todo.userId === user.id);
    const todoCount = todos.length;
    let iconType = showTodos ? BiShowAlt : BiHide;

    const toogleShowTodos = () => setShowTodos((prevState) => !prevState);

    const ToggleTodosButton = () => (
        <IconButton Icon={iconType} onClick={toogleShowTodos} variant="black" />
    );

    const TrashIcon = () => (
        <IconButton
            Icon={FaTrashAlt}
            variant="black"
            onClick={() => setShowUserRemoveAlert(true)}
        />
    );

    return (
        <li>
            <div className="user">
                <div className="col-span-2">
                    <Link to={`/profile/${user.id}`}>
                        <div className="flex items-center">
                            <IconButton Icon={FaUserAlt} className="mr-2" />
                            <span>{user.username}</span>
                        </div>
                    </Link>
                </div>
                <div className="col-span-2">
                    You have {todoCount} todo{todoCount > 1 ? "s" : ""}.
                </div>
                <div className="buttons">
                    <ToggleTodosButton />
                    {loggedInUser?.userType === "admin" ? (
                        <>
                            <TrashIcon />
                            {showUserRemoveAlert && (
                                <Modal showModal={setShowUserRemoveAlert}>
                                    <DialogBox
                                        text={`Are you sure to remove ${user.username}?`}
                                        setCancelButton={setShowUserRemoveAlert}
                                        setConfirmButton={() =>
                                            dispatch(removeUser(user.id))
                                        }
                                    />
                                </Modal>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
            {showTodos &&
                (todoCount !== 0 ? (
                    <TodoList todos={todos} />
                ) : (
                    <Alert
                        message="There is not any task here."
                        variant="danger"
                        className="mt-1"
                    />
                ))}
        </li>
    );
};

export default User;
