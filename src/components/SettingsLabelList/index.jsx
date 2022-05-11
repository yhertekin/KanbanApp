import Alert from "../Alert";
import "./SettingsLabelList.css";

const SettingsLabelList = ({ className, labels }) => {
    return (
        <div className="settings__labels">
            <h2 className="settings__labels__header">Label List</h2>
            {labels.length === 0 && (
                <Alert
                    className="w-full mt-1"
                    message="There is not any label here!"
                />
            )}
            <div className="settings__labels__list">
                {labels.map((label, index) => (
                    <div className="settings__labels__list__label" key={index}>
                        <div
                            className={`settings__labels__list__label__color label--${label.color}`}
                        ></div>
                        <div className="settings__labels__list__label__text">
                            {label.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsLabelList;
