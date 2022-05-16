import { GetAllUsers } from "../../selectors";
import User from "./User";

const UserList = () => {
    const users = GetAllUsers();

    return (
        <ul>
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </ul>
    );
};

export default UserList;
