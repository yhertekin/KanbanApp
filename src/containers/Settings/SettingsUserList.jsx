import { useEffect, useState } from "react";
//custom
import SettingsUser from "./SettingsUser";
import Input from "../../components/Input";
import SettingsUserUpdateForm from "./SettingsUserUpdateForm";
import { GetAllUsers } from "../../selectors";
//third
//css
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
        <div className="settings-user-list">
            <Input
                value={search}
                onChange={searchHandler}
                placeholder="Search"
                className="settings-user-list__search"
            />
            <div className="settings-user-list__container ">
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
                        <SettingsUserUpdateForm
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
