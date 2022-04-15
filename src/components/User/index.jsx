import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

import { removeUser } from "../../redux/usersSlice";
import TodoList from "../TodoList";
import Alert from "../Alert";
import IconButton from "../IconButton";

import styles from "./User.module.css";

const User = ({ user }) => {
    const todoList = useSelector((state) => state.todos.items);
    const todos = todoList.filter((todo) => todo.userId === user.id);
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const [showTodos, setShowTodos] = useState(false);

    const dispatch = useDispatch();

    const todoCount = todos.length;

    const toogleShowTodos = () => setShowTodos((prevState) => !prevState);
    let iconType = showTodos ? BiShowAlt : BiHide;

    const ToggleTodosButton = () => (
        <IconButton Icon={iconType} onClick={toogleShowTodos} variant="black" />
    );

    const TrashButton = () => (
        <IconButton
            Icon={FaTrashAlt}
            variant="black"
            onClick={() => dispatch(removeUser(user.id))}
        />
    );

    return (
        <li className={styles}>
            <div className={styles.user}>
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
                <div className={styles.buttons}>
                    <ToggleTodosButton />
                    {loggedInUser.userType === "admin" ? <TrashButton /> : null}
                </div>
            </div>
            {showTodos && todoCount !== 0 && <TodoList todos={todos} />}
            {showTodos && todoCount === 0 && (
                <Alert
                    message="There is not any task here."
                    variant="danger"
                    className="mt-1"
                />
            )}
        </li>
    );
};

export default User;
