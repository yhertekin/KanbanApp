import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { logoutUser } from "../../redux/usersSlice";
import IconButton from "../IconButton";
import styles from "./Header.module.css";

const Header = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;

    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.link} to="/">
                    Todo
                </Link>
                <Link className={styles.link} to="/users">
                    Users
                </Link>
            </div>
            <div>
                {isLoggedIn ? (
                    <div
                        className="rounded-full bg-blue-100 p-2 absolute right-5 top-2"
                        onClick={() => setShowMenu((prevState) => !prevState)}
                    >
                        <IconButton Icon={FaUserAlt} />
                    </div>
                ) : (
                    <>
                        <Link className={styles.link} to="/login">
                            Login
                        </Link>
                        <Link className={styles.link} to="/register">
                            Register
                        </Link>
                    </>
                )}
            </div>
            {showMenu ? (
                <div className="z-10 absolute h-auto w-72 text-black bg-white border top-10 mt-4 right-5 px-4 rounded flex flex-col">
                    <div className="flex justify-between  items-center border-b-2 py-4">
                        <span className="mr-5">Account</span>
                        <IconButton
                            Icon={AiOutlineClose}
                            variant="black"
                            onClick={() =>
                                setShowMenu((prevState) => !prevState)
                            }
                        />
                    </div>
                    <div className="py-2 flex justify-start items-center border-b-2 py-4">
                        <div className="flex justify-center items-center rounded-full w-10 h-10 bg-blue-100">
                            <Link to={`/profile/${loggedInUser.id}`}>
                                <IconButton Icon={FaUserAlt} />
                            </Link>
                        </div>
                        <div className="text-sm ml-2">
                            <div>{loggedInUser.username}</div>
                            <div>{loggedInUser.email}</div>
                        </div>
                    </div>
                    <div className="py-4" onClick={() => setShowMenu(false)}>
                        <Link
                            to="/login"
                            onClick={() => dispatch(logoutUser())}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
