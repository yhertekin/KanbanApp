import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

import { useDispatch } from "react-redux";
import { addComment } from "../../redux/commentsSlice";

const CommentInput = ({ todoId, userId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const buttonHandler = () => {
        if (text === "") return;
        dispatch(addComment({ text, userId, todoId }));
    };
    return (
        <div>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <Button children="Add" onClick={buttonHandler} />
        </div>
    );
};

export default CommentInput;
