import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/usersSlice";

const Header = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
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
        {currentUser?.isLoggedIn ? (
          <Link to="" onClick={() => dispatch(logoutUser(currentUser.id))}>
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
