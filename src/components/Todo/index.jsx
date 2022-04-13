import styles from "./Todo.module.css";
import { useState } from "react";
import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import ColorPicker from "../ColorPicker";

const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [colorPicker, setColorPicker] = useState(false);
    console.log("todo light color", todo.color.light);
    return (
        <div className={`${styles.todo}`}>
            <TodoHeader
                todo={todo}
                setEdit={setEdit}
                setColorPicker={setColorPicker}
            />
            <div className={`${styles.content} ${todo.color.light}`}>
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
