//custom
import UserLoginForm from "../../containers/User/UserLoginForm";
//third
import { Link } from "react-router-dom";
//css
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login__page">
            <div className="font-Major text-7xl mb-10 text-shadow-lg drop-shadow-md">
                TASKER
            </div>
            <UserLoginForm />
            <div className="login__page__footer">
                <p>Don't have an account yet?</p>
                <Link to="/register" className="login__page__footer__link">
                    Create an account
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
