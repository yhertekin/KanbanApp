import { useState } from "react";
import { useSelector } from "react-redux";

import TodoList from "./../components/TodoList";
import TodoInput from "../components/TodoInput";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { GrAdd } from "react-icons/gr";

const TodoPage = () => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    const todos = useSelector((state) => state.todos.items);

    return (
        <div>
            <Button
                onClick={() => setShowTodoInput(true)}
                variant="black" // override default
                className="absolute 
                top-15 left-8 mt-2 w-32 h-12 flex 
                justify-around items-center p-2 border rounded-xl text-white font-bold   
                bg-gradient-to-r from-green-300 to-blue-400 border-t-green-400 hover:bg-gradient-to-l "
            >
                <IconButton Icon={GrAdd} />
                Add
            </Button>
            {showTodoInput ? (
                <TodoInput setShowTodoInput={setShowTodoInput} />
            ) : null}

            <TodoList todos={todos} />
        </div>
    );
};

export default TodoPage;
