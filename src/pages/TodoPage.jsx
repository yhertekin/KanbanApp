import { useState } from "react";
import { useSelector } from "react-redux";

import TodoList from "./../components/TodoList";
import TodoInput from "../components/TodoInput";
import Button from "../components/Button";
import { GrAdd } from "react-icons/gr";

const TodoPage = () => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    const todos = useSelector((state) => state.todos.items);

    return (
        <div>
            <Button onClick={() => setShowTodoInput((prevState) => !prevState)}>
                <GrAdd />
                Add
            </Button>
            {showTodoInput ? (
                <TodoInput cancelButtonHandler={setShowTodoInput} />
            ) : null}

            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
