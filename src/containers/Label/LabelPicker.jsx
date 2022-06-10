//custom
import Label from "./Label";
//third
//css
import "./LabelPicker.css";
import { useUser } from "../../context/UserContext";
import { SelectProjectById } from "../../selectors";

const LabelPicker = ({ labelHandler }) => {
    const { loggedInUser } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);
    const labels = currentProject.labels;

    return (
        <div className="label-picker">
            {labels?.map((label, index) => (
                <Label
                    className={`label-picker__item ${
                        label.isIn && "opacity-25"
                    }`}
                    key={index}
                    label={label}
                    onClick={(e) => labelHandler(e, label)}
                />
            ))}
        </div>
    );
};

export default LabelPicker;
