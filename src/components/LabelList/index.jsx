import Label from "../Label";

import "./LabelList.css";

const LabelList = ({ className, labels }) => {
    return (
        <div className={`label__list ${className ?? ""}`}>
            {labels?.map((label) => (
                <Label
                    label={label}
                    key={label.id}
                    className="label__list__item"
                />
            ))}
        </div>
    );
};

export default LabelList;
