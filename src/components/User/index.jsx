import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

import { removeUser } from "../../redux/usersSlice";
import TodoList from "../TodoList";
import Alert from "../Alert";
import IconButton from "../IconButton";

import "./User.css";

const User = ({ user }) => {
    const [showTodos, setShowTodos] = useState(false);
    const todoList = useSelector((state) => state.todos.items);
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const dispatch = useDispatch();

    const todos = todoList.filter((todo) => todo.userId === user.id);
    const todoCount = todos.length;
    let iconType = showTodos ? BiShowAlt : BiHide;

    const removeUserHandler = () => dispatch(removeUser(user.id));
    const toogleShowTodos = () => setShowTodos((prevState) => !prevState);

    const ToggleTodosButton = () => (
        <IconButton Icon={iconType} onClick={toogleShowTodos} variant="black" />
    );

    const TrashButton = () => (
        <IconButton
            Icon={FaTrashAlt}
            variant="black"
            onClick={removeUserHandler}
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
                    {loggedInUser.userType === "admin" ? <TrashButton /> : null}
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
