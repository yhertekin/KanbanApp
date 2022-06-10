import TodoList from "../containers/Todo/TodoList";
import { TodoProvider } from "../context/TodoContext";
import { SelectProjectById } from "../selectors";
import { useUser } from "../context/UserContext";

const TodoPage = () => {
    const { loggedInUser } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

    return (
        <div>
            <h1 className="font-bold text-3xl my-2 p-2">
                {currentProject?.projectName}
            </h1>
            <TodoProvider>
                <TodoList currentProject={currentProject} />
            </TodoProvider>
        </div>
    );
};

export default TodoPage;
