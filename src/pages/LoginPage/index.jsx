import UserLogin from "../../components/UserLogin";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={styles["login__page"]}>
            <UserLogin />
        </div>
    );
};

export default LoginPage;
