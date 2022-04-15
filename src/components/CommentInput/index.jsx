import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/commentsSlice";

const CommentInput = ({ todoId, userId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const buttonHandler = () => {
        if (text === "") return;
        dispatch(addComment({ text, userId, todoId }));
        setText("");
    };
    return (
        <div>
            {loggedInUser?.id ? (
                <div>
                    <Input
                        placeholder="Make a comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="w-full flex justify-between items-center mt-1">
                        <span>{loggedInUser?.username}</span>
                        <Button children="Add" onClick={buttonHandler} />
                    </div>
                </div>
            ) : (
                <div>Please Login to make comments</div>
            )}
        </div>
    );
};

export default CommentInput;
