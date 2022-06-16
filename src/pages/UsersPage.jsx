import UserList from "../containers/User/UserList";
import { useUser } from "../context/UserContext";
import { SelectProjectById } from "../selectors";

const UsersPage = () => {
    const { loggedInUser, users } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

    const participants = currentProject.participants;

    const userList = participants.map((participant) =>
        users.find((user) => user.id === participant)
    );

    return (
        <div>
            <UserList users={userList} />
        </div>
    );
};

export default UsersPage;
