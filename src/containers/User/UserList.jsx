import User from "./User";
import { useUser } from "../../context/UserContext";

const UserList = () => {
    const { loggedInUser } = useUser();
    const users = loggedInUser.currentProject.participants;
    return (
        <ul>
            {users?.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </ul>
    );
};

export default UserList;
