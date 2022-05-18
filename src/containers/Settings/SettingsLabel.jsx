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
        <div className="settings-label">
            <div className="settings-label__create">
                <LabelCreateForm className="settings-label__create__input" />
            </div>
            <div>
                <SettingsLabelList labels={labels} />
            </div>
        </div>
    );
};

export default SettingsLabel;
