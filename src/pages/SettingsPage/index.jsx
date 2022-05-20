//custom
import CustomLink from "../../components/CustomLink";
import SettingsLabel from "../../containers/Settings/SettingsLabel";
import SettingsUserList from "../../containers/Settings/SettingsUserList";
import SettingsProjects from "../../containers/Settings/SettingsProjects";
//third
import { Routes, Route, useNavigate } from "react-router-dom";
//css
import "./SettingsPage.css";
import { useEffect } from "react";

const SettingsPage = () => {
    //ferhat abiye sor
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/settings/labels");
    }, []);

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
                <CustomLink
                    to="/settings/projects"
                    className="settings__link"
                    matchedClass="settings__link--active"
                >
                    Projects
                </CustomLink>
            </div>

            <Routes>
                <Route path="/labels" element={<SettingsLabel />} />
                <Route path="/users" element={<SettingsUserList />} />
                <Route path="/projects" element={<SettingsProjects />} />
            </Routes>
        </div>
    );
};

export default SettingsPage;
