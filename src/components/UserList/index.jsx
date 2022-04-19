import { useSelector } from "react-redux";
import User from "../User";

const UserList = () => {
    const users = useSelector((state) => state.users.items);

    return (
        <ul>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UserList;
