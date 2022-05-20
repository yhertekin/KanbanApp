import { useEffect, useState } from "react";
//custom
import SettingsUser from "./SettingsUser";
import Input from "../../components/Input";
import { GetAllUsers } from "../../selectors";
//third
//css
import "./SettingsUserList.css";

const SettingsUserList = () => {
    const [search, setSearch] = useState("");
    const users = GetAllUsers();
    const [filteredUsers, setFilteredUsers] = useState(users);

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
        <div className="settings-user-list ">
            <h2 className="text-2xl my-2">Users</h2>
            <Input
                value={search}
                onChange={searchHandler}
                placeholder="Search"
                className="settings-user-list__search"
            />
            <div className="settings-user-list__container ">
                {filteredUsers?.map((user) => (
                    <SettingsUser user={user} key={user.id} />
                ))}
            </div>
        </div>
    );
};

export default SettingsUserList;
