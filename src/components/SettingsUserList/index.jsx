import { useEffect, useState } from "react";

import SettingsUser from "../SettingsUser";
import Input from "../Input";
import SettingsUserUpdate from "../SettingsUserUpdate";

import { GetAllUsers } from "../../selectors";

import "./SettingsUserList.css";

const SettingsUserList = () => {
    const [search, setSearch] = useState("");
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const users = GetAllUsers();
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [currentUser, setCurrentUser] = useState(null);

    const searchHandler = (e) => {
        setFilteredUsers(() =>
            users.filter((user) =>
                user.username
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
        setSearch(e.target.value);
    };

    useEffect(() => setFilteredUsers(() => users), [users]);

    return (
        <div className="settings__user__list">
            <Input
                value={search}
                onChange={searchHandler}
                placeholder="Search"
                className="settings__user__list__search"
            />
            <div className="grid grid-cols-2">
                <div>
                    {filteredUsers?.map((user) => (
                        <SettingsUser
                            user={user}
                            key={user.id}
                            setShowUpdateUser={setShowUpdateUser}
                            setCurrentUser={setCurrentUser}
                        />
                    ))}
                </div>
                <div>
                    {showUpdateUser && (
                        <SettingsUserUpdate
                            user={currentUser}
                            setShowUpdateUser={setShowUpdateUser}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsUserList;
