import { useEffect, lazy, Suspense } from "react";
import CustomLink from "../../components/CustomLink";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./SettingsPage.css";
import { useUser } from "../../context/UserContext";
import { SelectProjectById } from "../../selectors";

const SettingsLabel = lazy(() =>
    import("../../containers/Settings/SettingsLabel")
);
const SettingsUserList = lazy(() =>
    import("../../containers/Settings/SettingsUserList")
);
const SettingsProjects = lazy(() =>
    import("../../containers/Settings/SettingsProjects")
);

const SettingsPage = () => {
    const navigate = useNavigate();

    const { loggedInUser } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

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

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        path="/labels"
                        element={
                            <SettingsLabel currentProject={currentProject} />
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <SettingsUserList currentProject={currentProject} />
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <SettingsProjects currentProject={currentProject} />
                        }
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default SettingsPage;
