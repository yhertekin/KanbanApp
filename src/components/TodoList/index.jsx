import TodoStatusSection from "../TodoStatusSection";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  const statusList = ["REVIEW", "IN_PROGRESS", "TEST", "DONE"];

  return (
    <div className={styles["todo__list"]}>
      {statusList.map((status, index) => (
        <TodoStatusSection
          key={index}
          status={status}
          todoList={todos.filter((todo) => todo.status === status)}
        />
      ))}
    </div>
  );
};

export default TodoList;
