import { GetAllLabels } from "../../selectors";
import Label from "../Label";

import "./LabelPicker.css";

const LabelPicker = ({ labelHandler }) => {
    const labels = GetAllLabels();

    return (
        <div className="label-picker">
            {labels.map((label) => (
                <Label
                    className="label-picker__item"
                    key={label.id}
                    label={label}
                    onClick={() => labelHandler(label.id)}
                />
            ))}
        </div>
    );
};

export default LabelPicker;
