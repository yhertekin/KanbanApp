import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import User from "../../components/User";

const ProfilePage = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users.items);
    const user = users.find((user) => user.id === id);

    return (
        <div>
            <div>{user.username}</div>
            <User user={user} />
        </div>
    );
};

export default ProfilePage;
