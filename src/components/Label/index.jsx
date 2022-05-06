import "./Label.css";

const Label = ({ className, label, ...props }) => {
    return (
        <div
            className={`label label--${label.color} ${className ?? ""}`}
            {...props}
        >
            {label.text}
        </div>
    );
};

export default Label;
