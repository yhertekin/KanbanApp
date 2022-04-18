import "./Button.css";

const Button = ({ className, children, variant, ...props }) => {
    return (
        <button
            className={`btn btn--${variant ?? "primary"} ${className ?? ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
