//custom
import { SelectCurrentProject } from "../../selectors";
import Label from "./Label";
//third
//css
import "./LabelList.css";

const LabelList = ({ className, labels }) => {
    return (
        <div className={`label-list ${className ?? ""}`}>
            {labels?.map((label) => (
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
