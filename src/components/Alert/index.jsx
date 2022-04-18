import "./Alert.css";

const Alert = ({ message, className, variant }) => {
    return (
        <div
            className={`alert alert--${variant ?? "primary"} ${
                className ?? ""
            }`}
        >
            {message}
        </div>
    );
};

export default Alert;
