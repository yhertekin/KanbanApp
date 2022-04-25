import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TodoList from "./../components/TodoList";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos.items);
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    useEffect(() => {
        if (loggedInUser.username === undefined) {
            navigate("/login");
        }
    }, [loggedInUser]);

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
