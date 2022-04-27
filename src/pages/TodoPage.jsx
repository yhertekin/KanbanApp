import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllTodos, GetLoggedInUser } from "../selectors";

import TodoList from "./../components/TodoList";

const TodoPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const todos = GetAllTodos();
    const loggedInUser = GetLoggedInUser();

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
