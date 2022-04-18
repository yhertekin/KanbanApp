import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Todo from "../Todo";
import IconButton from "../IconButton";

import "./TodoStatusSection.css";

const TodoStatusSection = ({ status, todoList }) => {
    const [showTodos, setShowTodos] = useState(true);

    const ArrowUp = () => (
        <IconButton
            Icon={IoIosArrowUp}
            variant="black"
            onClick={() => setShowTodos(false)}
        />
    );
    const ArrowDown = () => (
        <IconButton
            Icon={IoIosArrowDown}
            variant="black"
            onClick={() => setShowTodos(true)}
        />
    );

    return (
        <div>
            <div className="status__section">
                <header className="status__section__header">
                    <span>{status.split(/\d|_/).join(" ").toUpperCase()}</span>
                    {showTodos ? <ArrowUp /> : <ArrowDown />}
                </header>

                {showTodos && (
                    <div className="status__section__content">
                        {todoList.map((todo, index) => (
                            <Todo todo={todo} key={todo.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoStatusSection;
