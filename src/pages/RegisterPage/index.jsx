import UserRegister from "../../components/UserRegister";
import "./RegisterPage.css";

const RegisterPage = () => {
    return (
        <div className="register__page">
            <div className="font-Major text-7xl mb-10">TASKER</div>
            <UserRegister />
        </div>
    );
};

export default RegisterPage;
