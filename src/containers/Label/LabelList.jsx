//custom
import { GetAllLabels, GetCurrentProjectLabels } from "../../selectors";
import Label from "./Label";
//third
//css
import "./LabelList.css";

const LabelList = ({ className, labelIdList }) => {
    const labels = GetCurrentProjectLabels();

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
