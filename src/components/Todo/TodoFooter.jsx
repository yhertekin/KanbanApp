import React from "react";
import styles from "./Todo.module.css";
import IconButton from "../IconButton";
import { BsCalendarDate } from "react-icons/bs";

const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`
        : null;
};

const TodoFooter = ({ todo }) => {
    return (
        <div className={styles["todo__footer"]}>
            <IconButton Icon={BsCalendarDate} variant="black" />
            <span>{formatDate(todo.createdAt)}</span>
        </div>
    );
};

export default TodoFooter;
