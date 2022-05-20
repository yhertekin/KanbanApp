//custom
import TodoList from "../containers/Todo/TodoList";
import ProjectPicker from "../containers/Projects/ProjectPicker";
import {
    GetLoggedInUser,
    GetCurrentProject,
    GetCurrentProjectTodos,
} from "../selectors";
//third
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//css

const TodoPage = () => {
    const navigate = useNavigate();

    const todos = GetCurrentProjectTodos();
    const loggedInUser = GetLoggedInUser();
    const currentProject = GetCurrentProject();

    useEffect(() => {
        if (loggedInUser.username === undefined) {
            navigate("/login");
        }
    }, [loggedInUser]);

    return (
        <div>
            {currentProject ? (
                <>
                    <h1 className="font-bold text-3xl mb-5 mt-7">
                        {currentProject.name}
                    </h1>
                    <TodoList todos={todos} />
                </>
            ) : (
                <div>
                    <div className="text-3xl font-bold mb-3">Projects</div>
                    <ProjectPicker />
                </div>
            )}
        </div>
    );
};

export default TodoPage;
