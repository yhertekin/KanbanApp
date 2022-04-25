import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { MdCreate } from "react-icons/md";

import IconButton from "../IconButton";
import Menu from "./Menu";
import SidePanel from "../SidePanel";
import TodoInput from "../TodoInput";
import Button from "../Button";
import Modal from "../Modal";

import "./Header.css";

const Header = () => {
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showTodoInput, setShowTodoInput] = useState(false);
    const showTodoHandler = () => setShowTodoInput(true);

    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const showSidePanelHandler = () => setShowSidePanel(true);

    const handleShowMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowMenu((prevState) => !prevState);
    };

    useEffect(() => {
        const documentClick = (e) => {
            setShowMenu(false);
        };

        document.addEventListener("click", documentClick);

        return () => {
            document.removeEventListener("click", documentClick);
        };
    }, []);

    return (
        <header className="header">
            {loggedInUser?.username ? (
                <>
                    <div>
                        <IconButton
                            Icon={CgMenuLeft}
                            className="text-2xl"
                            onClick={showSidePanelHandler}
                        />
                    </div>
                    <Link to="/" className="font-Major text-3xl ml-5">
                        TASKER
                    </Link>
                    <Button
                        className="header__create-button"
                        onClick={showTodoHandler}
                        variant="primary"
                    >
                        <MdCreate />
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

                    <SidePanel
                        showSidePanel={showSidePanel}
                        setShowSidePanel={setShowSidePanel}
                    />
                </>
            ) : null}

            <div className="ml-auto">
                {loggedInUser?.username ? (
                    <div>
                        <div
                            className="header__profile"
                            onClick={handleShowMenu}
                        >
                            <FaUserAlt />
                        </div>
                        {showMenu && <Menu setShowMenu={setShowMenu} />}
                    </div>
                ) : (
                    <div>
                        <Link className="link" to="/login">
                            Login
                        </Link>
                        <Link className="link" to="/register">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
