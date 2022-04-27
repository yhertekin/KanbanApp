import { Link } from "react-router-dom";
import { BiComment } from "react-icons/bi";

import "./Todo.css";
import { useState } from "react";
import { FindUserById, GetLoggedInUser } from "../../selectors";
import Label from "../LabelPicker/Label";
import IconButton from "../IconButton";
import CommentSection from "../CommentSection";

const TodoFooter = ({ todo }) => {
    const [toggleCommentSection, setToggleCommentSection] = useState(false);
    const user = FindUserById(todo.userId);

    const commentSectionHandler = () =>
        setToggleCommentSection((prevState) => !prevState);

    return (
        <>
            <div className={`todo__footer`}>
                <div className="">
                    <Link to={`/profile/${user?.id}`} className="opacity-75">
                        {user?.username}
                    </Link>
                    <div className="todo__footer__label-list">
                        {todo.labelList.map((label, index) => (
                            <Label key={index} label={label} />
                        ))}
                    </div>
                </div>
                <IconButton
                    onClick={commentSectionHandler}
                    Icon={BiComment}
                    variant="black"
                    className="text-lg"
                />
            </div>
            {toggleCommentSection ? <CommentSection todoId={todo.id} /> : null}
        </>
    );
};

export default TodoFooter;
