const Label = ({ label, onClick }) => {
    return (
        <div
            className={`tooltip group ${label.color}`}
            onClick={onClick ?? null}
        >
            <span className="tooltip__text group-hover:block">
                {label.text}
            </span>
        </div>
    );
};

export default Label;
