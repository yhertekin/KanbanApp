import React from "react";
import CommentInput from "../CommentInput";
import Comment from "../Comment";

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;
