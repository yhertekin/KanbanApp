import { Link } from "react-router-dom";

import UserLogin from "../../components/UserLogin";

import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login__page">
            <UserLogin />
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
