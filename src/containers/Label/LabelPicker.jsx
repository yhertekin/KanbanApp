import { GetAllLabels } from "../../selectors";
import Label from ".";

import "./LabelPicker.css";

const LabelPicker = ({ labelHandler }) => {
    const labels = GetAllLabels();

    return (
        <div className="label-picker">
            {labels.map((label) => (
                <Label
                    className={`label-picker__item ${
                        label.isIn && "opacity-25"
                    }`}
                    key={label.id}
                    label={label}
                    onClick={(e) => labelHandler(e, label.id)}
                />
            ))}
        </div>
    );
};

export default LabelPicker;
