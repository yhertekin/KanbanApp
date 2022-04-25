import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getTodosAsync } from "../redux/todosSlice";
import TodoList from "./../components/TodoList";

const TodoPage = () => {
    const todos = useSelector((state) => state.todos.items);
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const dispatch = useDispatch();

    useEffect(() => {
        if (loggedInUser.username === undefined) {
            navigate("/login");
        }
    }, [loggedInUser]);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, []);

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
