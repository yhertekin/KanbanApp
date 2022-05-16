import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Todo from ".";
import IconButton from "../IconButton";

import "./TodoStatusSection.css";

const TodoStatusSection = ({ status, todoList }) => {
    const [showTodos, setShowTodos] = useState(true);

    const showTodoHandler = () => setShowTodos((prevState) => !prevState);

    const ArrowUp = () => (
        <IconButton
            Icon={IoIosArrowUp}
            variant="black"
            onClick={showTodoHandler}
        />
    );
    const ArrowDown = () => (
        <IconButton
            Icon={IoIosArrowDown}
            variant="black"
            onClick={showTodoHandler}
        />
    );

    return (
        <div>
            <div className="todo-status-section">
                <header className="todo-status-section__header">
                    <div>
                        <span>
                            {status.split(/\d|_/).join(" ").toUpperCase()}{" "}
                        </span>
                        <span className="opacity-25">({todoList.length})</span>
                    </div>
                    {showTodos ? <ArrowUp /> : <ArrowDown />}
                </header>

                {showTodos && (
                    <div className="todo-status-section__content">
                        {todoList.map((todo, index) => (
                            <Todo todo={todo} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoStatusSection;
