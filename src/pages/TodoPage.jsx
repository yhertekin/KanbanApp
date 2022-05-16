//custom
import TodoList from "../containers/Todo/TodoList";
import { GetAllTodos, GetLoggedInUser } from "../selectors";
//third
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//css

const TodoPage = () => {
    const navigate = useNavigate();

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
