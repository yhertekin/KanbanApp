import { GrUserSettings } from "react-icons/gr";

import IconButton from "../IconButton";

import "./SettingsUser.css";

const SettingsUser = ({ user, setShowUpdateUser, setCurrentUser }) => {
    const SettingsIcon = () => (
        <IconButton
            Icon={GrUserSettings}
            onClick={() => {
                setShowUpdateUser(true);
                setCurrentUser(user);
            }}
            className="settings__user__settings-icon"
        />
    );

    return (
        <div className="settings__user">
            <div className="settings__user__username">{user.username}</div>
            <div className="settings__user__email">{user.email}</div>
            <SettingsIcon />
        </div>
    );
};

export default SettingsUser;
