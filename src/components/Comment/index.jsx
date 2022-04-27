import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FindUserById } from "../../selectors";

import "./Comment.css";

const Comment = ({ comment }) => {
    const user = FindUserById(comment.userId);

    return (
        <div className="comment">
            <div>{comment.text}</div>
            <Link to={`/profile/${user?.id}`}>
                <div className="comment__profile">
                    <FaUserAlt className="mr-2" />
                    <span>{user?.username}</span>
                </div>
            </Link>
        </div>
    );
};

export default Comment;
