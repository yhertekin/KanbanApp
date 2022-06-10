//custom
//third
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useUser } from "../../context/UserContext";
//css
import "./Comment.css";

const Comment = ({ comment }) => {
    const { getUserById } = useUser();
    const user = getUserById(comment.user);
    return (
        <div className="comment">
            <Link to={`/profile/${user?.id}`}>
                <div className="comment__profile">
                    <FaUserAlt className="comment__profile__icon" />
                    <span>{user?.username}</span>
                </div>
            </Link>
            <div className="comment__text">{comment.text}</div>
        </div>
    );
};

export default Comment;
