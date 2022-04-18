import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import TodoInput from "../TodoInput";

const SidePanel = ({ showSidePanel }) => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    return (
        <div
            className={`h-full top-0 left-0 flex flex-col w-80 bg-blue-500 fixed p-3 ease-in-out duration-1000 
            `}
        >
            <Link className="" to="/">
                Todo
            </Link>
            <Link className="" to="/users">
                Users
            </Link>
            <Button className="" onClick={() => setShowTodoInput(true)}>
                Create
            </Button>
            {showTodoInput ? (
                <TodoInput setShowTodoInput={setShowTodoInput} />
            ) : null}
        </div>
    );
};

export default SidePanel;
