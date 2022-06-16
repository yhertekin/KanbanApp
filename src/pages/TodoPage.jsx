import TodoList from "../containers/Todo/TodoList";
import { TodoProvider } from "../context/TodoContext";
import {
    SelectProjectById,
    SelectProjectsByCreater,
    SelectProjectsByUserId,
} from "../selectors";
import { useUser } from "../context/UserContext";

const TodoPage = () => {
    const { loggedInUser, updateCurrentProject } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

    const projects = SelectProjectsByUserId(loggedInUser.id);

    if (!currentProject) {
        updateCurrentProject(projects[0].id);
    }

    return (
        <div>
            <h1 className="font-bold text-3xl my-2 px-4">
                {currentProject?.projectName}
            </h1>
            <TodoProvider>
                <TodoList currentProject={currentProject} />
            </TodoProvider>
        </div>
    );
};

export default TodoPage;
