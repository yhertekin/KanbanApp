//custom
import CommentCreateForm from "./CommentCreateForm";
import CommentList from "./CommentList";
import { useUser } from "../../context/UserContext";
//third
//css
import "./CommentSection.css";
import { useTodo } from "../../context/TodoContext";

const CommentSection = ({ todoId }) => {
    const { loggedInUser } = useUser();
    const { getComments } = useTodo();
    const comments = getComments(todoId);

    return (
        <div className="comment-section">
            <CommentCreateForm todoId={todoId} userId={loggedInUser?.id} />
            <CommentList comments={comments} />
        </div>
    );
};

export default CommentSection;
