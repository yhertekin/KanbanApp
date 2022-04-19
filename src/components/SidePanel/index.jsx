import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

import IconButton from "../IconButton";
import Button from "../Button";
import TodoInput from "../TodoInput";

import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const [showTodoInput, setShowTodoInput] = useState(false);
    const showTodoHandler = () => setShowTodoInput(true);
    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "translate-x-full" : "translate-x-0";

    return (
        <div className={`side-panel ${translate}`}>
            <div className="side-panel__icon">
                <IconButton Icon={CgMenuRight} onClick={showSidePanelHandler} />
            </div>
            <Link className="side-panel__link" to="/">
                Todo
            </Link>
            <Link className="side-panel__link" to="/users">
                Users
            </Link>
            <Button className="side-panel__link" onClick={showTodoHandler}>
                Create
            </Button>
            {showTodoInput ? (
                <TodoInput
                    setShowTodoInput={setShowTodoInput}
                    className="text-black"
                />
            ) : null}
        </div>
    );
};

export default SidePanel;
