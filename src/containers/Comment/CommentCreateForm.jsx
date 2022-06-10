import { useState } from "react";
//custom
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
//third
import { RiSendPlaneLine } from "react-icons/ri";
//css
import "./CommentCreateForm.css";
import { nanoid } from "nanoid";
import { useTodo } from "../../context/TodoContext";

const CommentCreateForm = ({ todoId, userId }) => {
    const [text, setText] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const { appendComment } = useTodo();

    const buttonHandler = () => {
        if (text === "") {
            setWarningMessage("Input can not be empty!");
            return;
        }
        setWarningMessage("");
        appendComment(todoId, { id: nanoid(), text: text, user: userId });
        setText("");
    };

    const inputChangeHandler = (e) => setText(e.target.value);

    return userId ? (
        <div className="comment-create-form">
            {warningMessage ? (
                <Alert
                    message={warningMessage}
                    className="comment-create-form__alert"
                    variant="danger"
                />
            ) : null}
            <Input
                placeholder="Make a comment"
                value={text}
                onChange={inputChangeHandler}
            />
            <div className="comment-create-form__footer">
                <Button
                    onClick={buttonHandler}
                    variant="primary"
                    className="comment-create-form__footer__button"
                >
                    <RiSendPlaneLine className="comment-create-form__footer__button__icon" />
                    <span>Send</span>
                </Button>
            </div>
        </div>
    ) : (
        <Alert message="Please Login to make comments" />
    );
};

export default CommentCreateForm;
