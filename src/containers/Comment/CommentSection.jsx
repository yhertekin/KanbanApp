//custom
import CommentCreateForm from "./CommentCreateForm";
import CommentList from "./CommentList";
import { GetAllComments, GetLoggedInUser } from "../../selectors";
//third
//css
import "./CommentSection.css";

const CommentSection = ({ todoId }) => {
    const comments = GetAllComments();
    const loggedInUser = GetLoggedInUser();

    return (
        <div className="comment-section">
            <CommentCreateForm todoId={todoId} userId={loggedInUser.id} />
            <CommentList
                comments={comments.filter(
                    (comment) => comment.todoId === todoId
                )}
            />
        </div>
    );
};

export default CommentSection;
