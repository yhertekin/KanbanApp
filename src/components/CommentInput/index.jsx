import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSendPlaneLine } from "react-icons/ri";

import { addComment } from "../../redux/commentsSlice";
import Button from "../Button";
import Input from "../Input";
import Alert from "../Alert";

import "./CommentInput.css";

const CommentInput = ({ todoId, userId }) => {
    const [text, setText] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const buttonHandler = () => {
        if (text === "") {
            setWarningMessage("Input can not be empty!");
            return;
        }
        setWarningMessage("");
        dispatch(addComment({ text, userId, todoId }));
        setText("");
    };

    const inputChangeHandler = (e) => setText(e.target.value);

    return loggedInUser?.id ? (
        <div className="comment__input__section">
            {warningMessage ? (
                <Alert
                    message={warningMessage}
                    className="mb-1"
                    variant="danger"
                />
            ) : null}
            <Input
                placeholder="Make a comment"
                value={text}
                onChange={inputChangeHandler}
            />
            <div className="comment__input__section__footer">
                <Button
                    onClick={buttonHandler}
                    variant="primary"
                    className="w-full flex justify-center items-center"
                >
                    <RiSendPlaneLine className="text-lg mr-2" />
                    <span>Send</span>
                </Button>
            </div>
        </div>
    ) : (
        <Alert message="Please Login to make comments" />
    );
};

export default CommentInput;
