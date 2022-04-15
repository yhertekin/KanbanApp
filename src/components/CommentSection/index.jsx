import CommentInput from "../CommentInput";
import CommentList from "../CommentList";
import { useSelector } from "react-redux";

const CommentSection = ({ todoId }) => {
    const comments = useSelector((state) => state.comments.items);
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    return (
        <div className="bg-slate-100 p-2 mt-2 rounded-md">
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
