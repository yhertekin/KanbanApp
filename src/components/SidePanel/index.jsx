import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

import IconButton from "../IconButton";
import Button from "../Button";
import TodoInput from "../TodoInput";
import Modal from "../Modal";

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
                <IconButton Icon={FaTasks} />
                <span className="side-panel__link__text">Todo</span>
            </Link>
            <Link className="side-panel__link" to="/users">
                <IconButton Icon={FiUsers} />
                <span className="side-panel__link__text">Users</span>
            </Link>
            <Button className="side-panel__button" onClick={showTodoHandler}>
                <IconButton Icon={MdCreate} />
                <span className="ml-1">Create</span>
            </Button>
            {showTodoInput ? (
                <Modal showModal={setShowTodoInput}>
                    <TodoInput
                        setShowTodoInput={setShowTodoInput}
                        className="text-black"
                    />
                </Modal>
            ) : null}
        </div>
    );
};

export default SidePanel;
