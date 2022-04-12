import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles}>
      <Link className="hover:underline" to="/">
        Todo
      </Link>
      <Link className="ml-2 hover:underline" to="/users">
        Users
      </Link>
    </header>
  );
};

export default Header;
