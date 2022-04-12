import styles from "./Todo.module.css";
import { useState } from "react";
import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.todo}>
      <TodoHeader todo={todo} setEdit={setEdit} />
      <div className={styles.content}>
        {edit ? (
          <EditTodo todo={todo} setEdit={setEdit} />
        ) : (
          <div className={`${todo.completed && "line-through"}`}>
            {todo.task}
          </div>
        )}
      </div>
      <TodoFooter todo={todo} />
    </div>
  );
};

export default Todo;
