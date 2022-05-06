import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { MdCreate } from "react-icons/md";

import { GetLoggedInUser } from "../../selectors";

import IconButton from "../IconButton";
import Menu from "./Menu";
import SidePanel from "../SidePanel";
import Input from "../Input";

import "./Header.css";
const Header = () => {
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const loggedInUser = GetLoggedInUser();

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
            {loggedInUser && (
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
                </div>
            )}

            <div className="ml-auto">
                {loggedInUser ? (
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
