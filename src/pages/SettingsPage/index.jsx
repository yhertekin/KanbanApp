import { Link, Routes, Route } from "react-router-dom";

import SettingsLabel from "../../components/SettingsLabel";

import "./SettingsPage.css";

const SettingsPage = () => {
    return (
        <div>
            <h1 className="settings__page__header">Settings</h1>
            <div className="settings__page__links">
                <Link to="/settings/labels" className="settings__page__link">
                    Labels
                </Link>
                <Link to="/settings/users" className="settings__page__link">
                    Users
                </Link>
            </div>

            <Routes>
                <Route path="/labels" element={<SettingsLabel />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
};

export default SettingsPage;

const Users = () => <div>users settings</div>;
