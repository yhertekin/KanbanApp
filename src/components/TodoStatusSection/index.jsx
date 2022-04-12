import Todo from "../Todo";
import Button from "../Button";
import styles from "./TodoStatusSection.module.css";
import { useState } from "react";

const TodoStatusSection = ({ status, todoList }) => {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className={styles["status__section"]}>
      <Button
        className={styles["status__section__header"]}
        onClick={() => setShowTodos((prev) => !prev)}
      >
        {status}
      </Button>
      {showTodos && todoList.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TodoStatusSection;
