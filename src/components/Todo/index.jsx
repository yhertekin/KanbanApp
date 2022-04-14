import styles from "./Todo.module.css";
import { useState } from "react";
import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import ColorPicker from "../ColorPicker";

const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [colorPicker, setColorPicker] = useState(false);
    return (
        <div className={`${styles.todo}`}>
            {todo.status !== "completed" ? (
                <TodoHeader
                    todo={todo}
                    setEdit={setEdit}
                    setColorPicker={setColorPicker}
                />
            ) : null}

            <div
                className={`${
                    styles[
                        todo.status === "completed"
                            ? "content__completed"
                            : "content__not__completed"
                    ]
                } ${todo.color.dark}`}
            >
                {edit ? (
                    <EditTodo todo={todo} setEdit={setEdit} />
                ) : colorPicker ? (
                    <ColorPicker todo={todo} />
                ) : (
                    <div>{todo.task}</div>
                )}
            </div>
            <TodoFooter todo={todo} />
        </div>
    );
};

export default Todo;
