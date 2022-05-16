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
            className="settings-user__icon"
        />
    );

    return (
        <div className="settings-user">
            <div className="settings-user__username">{user.username}</div>
            <div className="settings-user__email">{user.email}</div>
            <SettingsIcon />
        </div>
    );
};

export default SettingsUser;
