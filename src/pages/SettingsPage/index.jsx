//custom
import CustomLink from "../../components/CustomLink";
import SettingsLabel from "../../containers/Settings/SettingsLabel";
import SettingsUserList from "../../containers/Settings/SettingsUserList";
//third
import { Routes, Route } from "react-router-dom";
//css
import "./SettingsPage.css";

const SettingsPage = () => {
    return (
        <div className="settings">
            <h1 className="settings__header">Settings</h1>
            <div className="settings__links">
                <CustomLink
                    to="/settings/labels"
                    className="settings__link"
                    matchedClass="settings__link--active"
                >
                    Labels
                </CustomLink>
                <CustomLink
                    to="/settings/users"
                    className="settings__link"
                    matchedClass="settings__link--active"
                >
                    Users
                </CustomLink>
            </div>

            <Routes>
                <Route path="/labels" element={<SettingsLabel />} />
                <Route path="/users" element={<SettingsUserList />} />
            </Routes>
        </div>
    );
};

export default SettingsPage;
