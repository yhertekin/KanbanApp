import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import IconButton from "../IconButton";
import Menu from "./Menu";
import SidePanel from "../SidePanel";

import "./Header.css";

const Header = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;
    const [showSidePanel, setShowSidePanel] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const sidePanelIcon = showSidePanel ? CgMenuLeft : CgMenuRight;

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
                    Icon={sidePanelIcon}
                    className={`text-2xl ${showSidePanel ? "ml-80" : ""}`}
                    onClick={() => setShowSidePanel((prevState) => !prevState)}
                />
            </div>
            {showSidePanel ? <SidePanel showSidePanel={showSidePanel} /> : null}

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
