import "./Button.css";

const Button = ({ className, children, variant, ...props }) => {
    return (
        <button
            className={`btn btn--${variant ?? "none"} ${className ?? ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
