import LabelInput from "../../components/LabelInput";
import SettingsLabelList from "../../components/SettingsLabelList";

import { GetAllLabels } from "../../selectors";

import "./SettingsLabel.css";

const SettingsLabel = () => {
    const labels = GetAllLabels();
    return (
        <div className="settings-label">
            <div className="settings-label__create">
                <LabelInput className="settings-label__create__input" />
            </div>
            <div>
                <SettingsLabelList labels={labels} />
            </div>
        </div>
    );
};

export default SettingsLabel;
