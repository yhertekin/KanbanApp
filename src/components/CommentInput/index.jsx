import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/commentsSlice";

import "./CommentInput.css";

const CommentInput = ({ todoId, userId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const buttonHandler = () => {
        if (text === "") return;
        dispatch(addComment({ text, userId, todoId }));
        setText("");
    };

    return loggedInUser?.id ? (
        <div className="comment__input__section">
            <Input
                placeholder="Make a comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="comment__input__section__footer">
                <span>{loggedInUser?.username}</span>
                <Button children="Add" onClick={buttonHandler} />
            </div>
        </div>
    ) : (
        <div>Please Login to make comments</div>
    );
};

export default CommentInput;
