import LabelInput from "../../components/LabelInput";
import LabelList from "../../components/LabelList";

import { GetAllLabels } from "../../selectors";

const SettingsLabel = () => {
    const labels = GetAllLabels();
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <h2>Create a new label</h2>
                <LabelInput />
            </div>
            <div>
                <h2>Label List</h2>
                <LabelList labels={labels} className="flex flex-col" />
            </div>
        </div>
    );
};

export default SettingsLabel;
