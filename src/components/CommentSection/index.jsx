import CommentInput from "../CommentInput";
import CommentList from "../CommentList";

import { GetAllComments, GetLoggedInUser } from "../../selectors";

import "./CommentSection.css";

const CommentSection = ({ todoId }) => {
    const comments = GetAllComments();
    const loggedInUser = GetLoggedInUser();

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
