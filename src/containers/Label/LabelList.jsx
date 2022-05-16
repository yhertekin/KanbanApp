import { GetAllLabels } from "../../selectors";
import Label from ".";

import "./LabelList.css";

const LabelList = ({ className, labelIdList }) => {
    const labels = GetAllLabels();

    const currentLabels = labelIdList?.map((id) =>
        labels.find((label) => label.id === id)
    );

    return (
        <div className={`label-list ${className ?? ""}`}>
            {currentLabels?.map((label) => (
                <Label
                    label={label}
                    key={label.id}
                    className="label-list__item"
                />
            ))}
        </div>
    );
};

export default LabelList;
