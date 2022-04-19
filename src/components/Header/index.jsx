import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";

import IconButton from "../IconButton";
import Menu from "./Menu";
import SidePanel from "../SidePanel";

import "./Header.css";

const Header = () => {
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;

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
            <div>
                <IconButton
                    Icon={CgMenuLeft}
                    className="text-2xl"
                    onClick={showSidePanelHandler}
                />
            </div>
            <SidePanel
                showSidePanel={showSidePanel}
                setShowSidePanel={setShowSidePanel}
            />

            <div>
                {isLoggedIn ? (
                    <div>
                        <div
                            className="header__profile"
                            onClick={handleShowMenu}
                        >
                            <IconButton Icon={FaUserAlt} />
                        </div>
                        {showMenu && <Menu setShowMenu={setShowMenu} />}
                    </div>
                ) : (
                    <>
                        <Link className="link" to="/login">
                            Login
                        </Link>
                        <Link className="link" to="/register">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
