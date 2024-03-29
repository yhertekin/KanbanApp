//custom
import TodoStatusSection from "./TodoStatusSection";
//third
//css
import "./TodoList.css";
import { SelectCurrentProject } from "../../selectors";
import { getItemFromLocalStorage } from "../../functions";
import { useTodo } from "../../context/TodoContext";
import { useEffect } from "react";
import eventBus, { actionNames } from "../../EventBus";

const statusList = ["review", "in_progress", "test", "completed"];

const TodoList = ({ currentProject }) => {
    const { todos, setTodos } = useTodo();

    useEffect(() => {
        eventBus.on(actionNames.addTodo, (data) => setTodos(data.todos));
        return () => eventBus.remove(actionNames.addTodo);
    }, []);

    
    const todoList = todos.filter((todo) => todo.project === currentProject.id);

    return (
        <div className="todo-list p-2">
            {statusList.map((status, index) => (
                <TodoStatusSection
                    key={index}
                    status={status}
                    todoList={todoList.filter((todo) => todo.status === status)}
                />
            ))}
        </div>
    );
};

export default TodoList;
