import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiUsers, FiSettings } from "react-icons/fi";
import { HiOutlineHome, HiOutlineUsers, HiOutlineLogout } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdCreate } from "react-icons/md";

import IconButton from "../IconButton";
import Button from "../Button";
import Modal from "../Modal";
import TodoInput from "../TodoInput";
import { logoutUser } from "../../redux/usersSlice";
import { GetLoggedInUser } from "../../selectors";

import "./SidePanel.css";

const SidePanel = ({ showSidePanel, setShowSidePanel }) => {
    const dispatch = useDispatch();
    const [showTodo, setShowTodo] = useState(false);
    const [showTodoInput, setShowTodoInput] = useState(false);
    const showCreateTodoHandler = () => setShowTodoInput(true);
    const showSidePanelHandler = () => setShowSidePanel(false);
    const translate = showSidePanel ? "side-panel--open" : "side-panel--close";
    const loggedInUser = GetLoggedInUser();

    const logoutHandler = () => dispatch(logoutUser());

    const showTodoHandler = () => setShowTodo((prevState) => !prevState);

    const ArrowUp = () => <IconButton Icon={IoIosArrowUp} variant="black" />;
    const ArrowDown = () => (
        <IconButton Icon={IoIosArrowDown} variant="black" />
    );

    return (
        <div className={`side-panel ${translate}`}>
            <div className="side-panel__menu__header">
                <Link to="/" className="font-Major text-3xl ">
                    TASKER
                </Link>
                <div className="side-panel__menu__icon">
                    <IconButton
                        Icon={CgMenuRight}
                        onClick={showSidePanelHandler}
                    />
                </div>
            </div>
            <div className="side-panel__navbar">
                <div>
                    <Link className="side-panel__link" to="/">
                        <HiOutlineHome className="side-panel__icon" />
                        <span className="side-panel__link__text">
                            Dashboard
                        </span>
                    </Link>
                    {loggedInUser?.userType === "admin" && (
                        <>
                            <Link className="side-panel__link" to="/users">
                                <HiOutlineUsers className="side-panel__icon" />
                                <span className="side-panel__link__text">
                                    Team
                                </span>
                            </Link>
                        </>
                    )}
                    <div className="side-panel__todo" onClick={showTodoHandler}>
                        <span>To-do</span>
                        {showTodo ? <ArrowUp /> : <ArrowDown />}
                    </div>
                    {showTodo && (
                        <Button
                            className="side-panel__create-button"
                            onClick={showCreateTodoHandler}
                            variant="none"
                        >
                            <MdCreate />
                            <span className="ml-1">Create</span>
                        </Button>
                    )}
                    {showTodoInput ? (
                        <Modal showModal={setShowTodoInput}>
                            <TodoInput
                                setShowTodoInput={setShowTodoInput}
                                className="text-black"
                            />
                        </Modal>
                    ) : null}
                </div>
                <div className="mb-5">
                    <Link className="side-panel__link" to="/settings">
                        <FiSettings className="side-panel__icon" />
                        <span className="side-panel__link__text">Settings</span>
                    </Link>
                    <Link
                        className="side-panel__link"
                        to="/login"
                        onClick={logoutHandler}
                    >
                        <HiOutlineLogout className="side-panel__icon" />
                        <span className="side-panel__link__text">Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
