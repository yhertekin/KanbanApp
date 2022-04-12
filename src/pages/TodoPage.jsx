import TodoList from "./../components/TodoList";
import TodoInput from "../components/TodoInput";
import { useSelector } from "react-redux";

const TodoPage = () => {
  const todos = useSelector((state) => state.todos.items);
  return (
    <div>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoPage;
