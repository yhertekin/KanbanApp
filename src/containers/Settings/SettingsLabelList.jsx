import Alert from "../Alert";
import "./SettingsLabelList.css";

const SettingsLabelList = ({ className, labels }) => {
    return (
        <div className="settings-label-list__container">
            <h2 className="settings-label-list__header">Label List</h2>
            {labels.length === 0 && (
                <Alert
                    className="settings-label-list__alarm"
                    message="There is not any label here!"
                />
            )}
            <div className="settings-label-list__list">
                {labels.map((label, index) => (
                    <div
                        className="settings-label-list__list__item"
                        key={index}
                    >
                        <div
                            className={`settings-label-list__list__item--color label--${label.color}`}
                        ></div>
                        <div className="settings-label-list__list__item--text">
                            {label.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsLabelList;
