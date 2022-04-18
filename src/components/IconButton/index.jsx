import "./IconButton.css";

const IconButton = ({ Icon, variant, className, ...props }) => {
    return (
        <Icon
            className={`icon icon--${variant ?? "primary"} ${className ?? ""}`}
            {...props}
        />
    );
};

export default IconButton;
