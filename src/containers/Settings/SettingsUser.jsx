import { useState } from "react";
//custom
import IconButton from "../../components/IconButton";
import SettingsUserUpdateForm from "./SettingsUserUpdateForm";
//third
import { GrUserSettings } from "react-icons/gr";
//css
import "./SettingsUser.css";

const SettingsUser = ({ user }) => {
    const [showUpdateUser, setShowUpdateUser] = useState(false);

    const SettingsIcon = () => (
        <IconButton
            Icon={GrUserSettings}
            onClick={() => {
                setShowUpdateUser((prevState) => !prevState);
            }}
            className="settings-user__icon"
        />
    );

    return (
        <div className="settings-user">
            <div className="flex justify-between items-center font-bold">
                <div className="settings-user__username">{user.username}</div>
                <SettingsIcon />
            </div>
            <div>
                {showUpdateUser && (
                    <SettingsUserUpdateForm
                        user={user}
                        setShowUpdateUser={setShowUpdateUser}
                    />
                )}
            </div>
        </div>
    );
};

export default SettingsUser;
