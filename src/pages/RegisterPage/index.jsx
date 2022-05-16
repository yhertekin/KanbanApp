//Custom
import UserRegisterForm from "../../containers/User/UserRegisterForm";
//third
//css
import "./RegisterPage.css";

const RegisterPage = () => {
    return (
        <div className="register__page">
            <div className="font-Major text-7xl mb-10 mt-7 drop-shadow-md">
                TASKER
            </div>
            <UserRegisterForm />
        </div>
    );
};

export default RegisterPage;
