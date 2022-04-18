import "./Input.css";

const Input = ({ className, variant, ...props }) => {
    return (
        <input
            className={`input input--${variant ?? "primary"} ${
                className ?? ""
            }`}
            {...props}
        />
    );
};

export default Input;
