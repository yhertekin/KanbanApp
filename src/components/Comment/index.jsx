import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import IconButton from "../IconButton";

const Comment = ({ comment }) => {
    const users = useSelector((state) => state.users.items);
    const user = users.find((user) => user.id === comment.userId);
    return (
        <div className="bg-stone-200 px-2 py-1 mt-1 hover:bg-stone-300 rounded-md flex justify-between items-center">
            <div>{comment.text}</div>
            <Link to={`/profile/${user?.id}`}>
                <div className="flex justify-between items-center">
                    <IconButton Icon={FaUserAlt} className="mr-1" />
                    <span>{user?.username}</span>
                </div>
            </Link>
        </div>
    );
};

export default Comment;
