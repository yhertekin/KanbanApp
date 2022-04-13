import UserRegister from "../../components/UserRegister";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    return (
        <div className={styles["register__page"]}>
            <UserRegister />
        </div>
    );
};

export default RegisterPage;
