import { useSelector } from "react-redux";

import TodoList from "./../components/TodoList";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos.items);

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
