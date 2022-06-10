//custom
import LabelCreateForm from "../Label/LabelCreateForm";
import SettingsLabelList from "./SettingsLabelList";
//third
//css
import "./SettingsLabel.css";

const SettingsLabel = ({ currentProject, ...props }) => {
    const labels = currentProject.labels;

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="p-2 w-full">
                <LabelCreateForm currentProject={currentProject} />
            </div>
            <div className="p-2 w-full">
                <SettingsLabelList labels={labels} />
            </div>
        </div>
    );
};

export default SettingsLabel;
