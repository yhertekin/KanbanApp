import React from "react";
import styles from "./Todo.module.css";
import IconButton from "../IconButton";
import { BsCalendarDate } from "react-icons/bs";

const TodoFooter = ({ todo }) => {
  const date = todo.createdAt;
  return (
    <div className={styles["todo__footer"]}>
      <IconButton Icon={BsCalendarDate} variant="black" />
      <span>
        {todo.createdAt.toLocaleString("tr", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>
  );
};

export default TodoFooter;
