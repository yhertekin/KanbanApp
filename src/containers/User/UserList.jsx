import User from "./User";

const UserList = ({ users }) => {
    return (
        <ul>
            {users?.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </ul>
    );
};

export default UserList;
