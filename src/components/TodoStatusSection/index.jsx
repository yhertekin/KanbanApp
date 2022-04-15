import Todo from "../Todo";
import Button from "../Button";
import styles from "./TodoStatusSection.module.css";
import { useState } from "react";
import IconButton from "../IconButton";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const TodoStatusSection = ({ status, todoList }) => {
    const [showTodos, setShowTodos] = useState(true);

    const ArrowUp = () => (
        <IconButton
            Icon={IoIosArrowUp}
            variant="black"
            onClick={() => setShowTodos((prevState) => !prevState)}
        />
    );
    const ArrowDown = () => (
        <IconButton
            Icon={IoIosArrowDown}
            variant="black"
            onClick={() => setShowTodos((prevState) => !prevState)}
        />
    );

    return (
        <div>
            <div className={styles["status__section"]}>
                <header className={styles["status__section__header"]}>
                    <span>{status.split(/\d|_/).join(" ").toUpperCase()}</span>
                    {showTodos ? <ArrowUp /> : <ArrowDown />}
                </header>

                {showTodos && (
                    <div className={styles["status__section__content"]}>
                        {todoList.map((todo, index) => (
                            <Todo todo={todo} key={todo.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoStatusSection;
