//custom
import LabelCreateForm from "../Label/LabelCreateForm";
import SettingsLabelList from "./SettingsLabelList";
import { GetAllLabels, GetCurrentProjectLabels } from "../../selectors";
//third
//css
import "./SettingsLabel.css";

const SettingsLabel = () => {
    const labels = GetCurrentProjectLabels();
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="p-2 w-full">
                <LabelCreateForm className="" />
            </div>
            <div className="p-2 w-full">
                <SettingsLabelList labels={labels} />
            </div>
        </div>
    );
};

export default SettingsLabel;
