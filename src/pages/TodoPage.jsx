import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TodoList from "./../components/TodoList";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos.items);
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;

    if (!isLoggedIn) {
        navigate("/login");
        return;
    }

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
