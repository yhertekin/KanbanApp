import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/usersSlice";

const Header = () => {
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const isLoggedIn = loggedInUser && Object.keys(loggedInUser).length !== 0;

    const dispatch = useDispatch();

    return (
        <header className={styles}>
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
                    <Link to="/login" onClick={() => dispatch(logoutUser())}>
                        Logout
                    </Link>
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
        </header>
    );
};

export default Header;
