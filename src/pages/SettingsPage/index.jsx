import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import SettingsLabel from "../../components/SettingsLabel";
import SettingsUserList from "../../components/SettingsUserList";

import "./SettingsPage.css";

const SettingsPage = () => {
    const onClickHandler = (e) => {};
    const location = useLocation();

    useEffect(() => {
        Array.from(document.querySelectorAll(".settings__link")).forEach(
            (item) => item.classList.remove("settings__link--active")
        );
        const path = location.pathname.split("/")[2];

        if (!path) return;
        document
            .querySelector("." + path)
            .classList.add("settings__link--active");
        // e.target.classList.add("settings__link--active");
    }, [location]);

    return (
        <div className="settings">
            <h1 className="settings__header">Settings</h1>
            <div className="settings__links">
                <Link
                    to="/settings/labels"
                    className="settings__link labels"
                    onClick={onClickHandler}
                >
                    Labels
                </Link>
                <Link
                    to="/settings/users"
                    className="settings__link users"
                    onClick={onClickHandler}
                >
                    Users
                </Link>
            </div>

            <Routes>
                <Route path="/labels" element={<SettingsLabel />} />
                <Route path="/users" element={<SettingsUserList />} />
            </Routes>
        </div>
    );
};

export default SettingsPage;
