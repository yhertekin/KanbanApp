import { useState, useEffect } from "react";
//custom
import IconButton from "../../components/IconButton";
import Menu from "./Menu";
import SidePanel from "../SidePanel";
import TodoCreateForm from "../../containers/Todo/TodoCreateForm";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import CustomLink from "../../components/CustomLink";
import { TodoContext, TodoProvider } from "../../context/TodoContext";
import { getItemFromLocalStorage } from "../../functions";

//third
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { MdCreate } from "react-icons/md";
//css

import "./Header.css";
import { useUser } from "../../context/UserContext";

const Header = () => {
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showTodoInput, setShowTodoInput] = useState(false);
    const { loggedInUser } = useUser();

    const showSidePanelHandler = () => setShowSidePanel(true);
    const notificationCount = loggedInUser?.notifications.length || 0;

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
            {!isEmptyObject(loggedInUser) && (
                <div className="flex w-500 items-center justify-between">
                    <IconButton
                        Icon={CgMenuLeft}
                        className="text-2xl"
                        onClick={showSidePanelHandler}
                    />

                    <SidePanel
                        showSidePanel={showSidePanel}
                        setShowSidePanel={setShowSidePanel}
                    />
                    <Button
                        className="header__create__button py-1 px-2"
                        onClick={setShowTodoInput}
                        variant="none"
                    >
                        <MdCreate />
                        <span className="ml-1">Create</span>
                    </Button>
                </div>
            )}

            <div className="ml-auto">
                {!isEmptyObject(loggedInUser) ? (
                    <div className="flex items-center ">
                        <div className="mr-5 font-bold">
                            {loggedInUser.username}
                        </div>
                        <div
                            className="header__profile"
                            onClick={handleShowMenu}
                        >
                            <FaUserAlt />
                        </div>
                        {notificationCount > 0 && (
                            <div className="font-bold text-sm text-white bg-red-500 rounded-full w-5 h-5 flex justify-center items-center absolute top-2 right-3 border-white border-2">
                                <div>
                                    {notificationCount > 10
                                        ? "!"
                                        : notificationCount}
                                </div>
                            </div>
                        )}
                        {showMenu && <Menu setShowMenu={setShowMenu} />}
                    </div>
                ) : (
                    <div className="flex">
                        <CustomLink
                            className="link"
                            to="/login"
                            matchedClass="link--active"
                        >
                            Login
                        </CustomLink>
                        <CustomLink
                            className="link"
                            to="/register"
                            matchedClass="link--active"
                        >
                            Register
                        </CustomLink>
                    </div>
                )}
            </div>

            {showTodoInput && (
                <Modal showModal={setShowTodoInput}>
                    <TodoProvider>
                        <TodoCreateForm
                            setShowTodoInput={setShowTodoInput}
                            className="text-black"
                        />
                    </TodoProvider>
                </Modal>
            )}
        </header>
    );
};

function isEmptyObject(obj) {
    if (
        typeof obj === "object" &&
        obj != null &&
        Object.keys(obj).length !== 0
    ) {
        return false;
    } else {
        return true;
    }
}

export default Header;
