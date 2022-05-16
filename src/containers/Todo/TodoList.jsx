//custom
import TodoStatusSection from "./TodoStatusSection";
//third
//css
import "./TodoList.css";

const TodoList = ({ todos }) => {
    const statusList = ["review", "in_progress", "test", "completed"];

    return (
        <div className="todo-list">
            {statusList.map((status, index) => (
                <TodoStatusSection
                    key={index}
                    status={status}
                    todoList={todos.filter((todo) => todo.status === status)}
                />
            ))}
        </div>
    );
};

export default TodoList;
