import React from "react";
import styles from "./Todo.module.css";
import IconButton from "../IconButton";
import { BsCalendarDate } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../redux/todosSlice";

const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null;
};

const TodoFooter = ({ todo }) => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const TrashIcon = () => (
        <IconButton
            Icon={FaTrashAlt}
            onClick={() => dispatch(removeTodo(todo.id))}
            variant="black"
        />
    );

    const CalendarIcon = () => (
        <IconButton Icon={BsCalendarDate} variant="black" className="mr-1" />
    );
    const user = useSelector((state) => state.users.items).find(
        (user) => user.id === todo.userId
    );

    return (
        <div
            className={`${styles["todo__footer"]} ${
                styles[`${todo.color}--light`]
            }`}
        >
            <div className={styles["todo__footer__date"]}>
                <CalendarIcon />
                <span>{formatDate(todo.createdAt)}</span>
            </div>
            <div>{user.username}</div>
            {todo.status === "review" && loggedInUser?.userType === "admin" ? (
                <TrashIcon />
            ) : null}
        </div>
    );
};

export default TodoFooter;
