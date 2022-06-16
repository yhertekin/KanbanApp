import { useEffect, useState } from "react";
//custom
import SettingsUser from "./SettingsUser";
import Input from "../../components/Input";
import { isAdmin } from "../../functions";
import Alert from "../../components/Alert";
//third
//css
import "./SettingsUserList.css";
import { useUser } from "../../context/UserContext";
import Button from "../../components/Button";
import { FiUserPlus } from "react-icons/fi";
import IconButton from "../../components/IconButton";
import SettingsUserAddForm from "./SettingsUserAddForm";

const SettingsUserList = ({ currentProject, ...props }) => {
    const [search, setSearch] = useState("");
    const [showAddUser, setShowAddUser] = useState(false);

    const { users, loggedInUser } = useUser();

    const admin = isAdmin(loggedInUser, currentProject);

    const [participants, setParticipants] = useState([
        loggedInUser,
        ...currentProject?.participants.map((userId) =>
            users.find((user) => user.id === userId)
        ),
    ]);

    const [filteredUsers, setFilteredUsers] = useState([...participants]);

    useEffect(() => {
        setParticipants([
            loggedInUser,
            ...currentProject?.participants.map((userId) =>
                users.find((user) => user.id === userId)
            ),
        ]);
    }, [currentProject.participants, users, loggedInUser]);

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

    useEffect(() => setFilteredUsers(() => [...participants]), [participants]);

    const AddUserIcon = () => (
        <IconButton
            Icon={FiUserPlus}
            onClick={() => setShowAddUser((prevState) => !prevState)}
            className="text-2xl "
        />
    );

    return (
        <div className="w-full">
            <div className="flex justify-start items-center px-2 text-blue-700">
                <h2 className="text-2xl my-2 mr-auto sm:mr-5">Users</h2>
                <AddUserIcon />
            </div>
            {admin ? (
                <div className="flex flex-col lg:flex-row ">
                    {showAddUser && (
                        <SettingsUserAddForm
                            currentProject={currentProject}
                            participants={participants}
                            className="w-full px-2"
                        />
                    )}
                    <div
                        className={`px-2 ${
                            showAddUser ? "w-full " : "lg:w-6/12"
                        }`}
                    >
                        <h2 className="text-xl">User List</h2>
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
                </div>
            ) : (
                <>
                    <Alert
                        message="You are not the admin of this project!"
                        variant="danger"
                    />
                    <Alert
                        message="You can not add any participant to this project!"
                        variant="danger"
                    />
                    <Alert
                        message="You can not view participants of this project!"
                        variant="danger"
                    />
                </>
            )}
        </div>
    );
};

export default SettingsUserList;
