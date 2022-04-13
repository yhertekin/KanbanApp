import Todo from "../Todo";
import Button from "../Button";
import styles from "./TodoStatusSection.module.css";
import { useState } from "react";

const TodoStatusSection = ({ status, todoList }) => {
    const [showTodos, setShowTodos] = useState(true);

    return (
        <div className={styles["status__section"]}>
            <header
                className={styles["status__section__header"]}
                onClick={() => setShowTodos((prev) => !prev)}
            >
                {status.split(/\d|_/).join(" ").toUpperCase()}
            </header>
            <div>
                {showTodos &&
                    todoList.map((todo) => <Todo todo={todo} key={todo.id} />)}
            </div>
        </div>
    );
};

export default TodoStatusSection;
