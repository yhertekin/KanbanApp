//custom
import User from "../../containers/User/User";
//thid
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//css

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
