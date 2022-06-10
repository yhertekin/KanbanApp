import { useEffect, useState } from "react";
//custom
import SettingsUser from "./SettingsUser";
import Input from "../../components/Input";
import { getItemFromLocalStorage } from "../../functions";
import { appendParticipantToProject } from "../../redux/projectsSlice";
import Alert from "../../components/Alert";
//third
import { useDispatch } from "react-redux";
//css
import "./SettingsUserList.css";
import { useUser } from "../../context/UserContext";

const SettingsUserList = ({ currentProject, ...props }) => {
    const [search, setSearch] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const { users, sendNotification, loggedInUser } = useUser();
    const dispatch = useDispatch();

    //usememo
    const participants = currentProject?.participants.map((userId) =>
        users.find((user) => user.id === userId)
    );
    const [filteredUsers, setFilteredUsers] = useState(participants);
    console.log("filtered:", filteredUsers);

    const searchHandler = (e) => {
        setFilteredUsers(() =>
            participants?.filter((user) =>
                user.username
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
        setSearch(e.target.value);
    };

    useEffect(
        () => setFilteredUsers(() => participants),
        [participants.length]
    );

    const handleAppend = (user) => {
        if (participants.find((participant) => participant.id === user.id)) {
            setWarningMessage(
                `${user.username} is already in project's participants`
            );
            return;
        }

        console.log({
            senderId: loggedInUser.id,
            receiverId: user.id,
            project: currentProject,
        });
        sendNotification({
            senderId: loggedInUser.id,
            receiverId: user.id,
            project: currentProject,
        });

        setWarningMessage("");
    };

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

            {warningMessage && (
                <div className="my-2">
                    <Alert message={warningMessage} variant="danger" />
                </div>
            )}

            <div>
                {users.map((user, index) => (
                    <div key={index}>
                        <div>{user.username}</div>
                        <button onClick={() => handleAppend(user)}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsUserList;
