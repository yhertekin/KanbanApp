import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import Menu from "./Menu";

import "./Header.css";

const Header = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;

    const [showMenu, setShowMenu] = useState(false);

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
                <Link className="link" to="/">
                    Todo
                </Link>
                <Link className="link" to="/users">
                    Users
                </Link>
            </div>
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
