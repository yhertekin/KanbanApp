import { useSelector } from "react-redux";

import CommentInput from "../CommentInput";
import CommentList from "../CommentList";

import "./CommentSection.css";

const CommentSection = ({ todoId }) => {
    const comments = useSelector((state) => state.comments.items);
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    return (
        <div className="comment__section">
            <CommentInput todoId={todoId} userId={loggedInUser.id} />
            <CommentList
                comments={comments.filter(
                    (comment) => comment.todoId === todoId
                )}
            />
        </div>
    );
};

export default CommentSection;
