import LabelInput from "../../components/LabelInput";
import SettingsLabelList from "../../components/SettingsLabelList";

import { GetAllLabels } from "../../selectors";

import "./SettingsLabel.css";

const SettingsLabel = () => {
    const labels = GetAllLabels();
    return (
        <div className="settings__label">
            <div className="settings__label__create">
                <LabelInput className="settings__label__create__input" />
            </div>
            <div>
                <SettingsLabelList labels={labels} />
            </div>
        </div>
    );
};

export default SettingsLabel;
