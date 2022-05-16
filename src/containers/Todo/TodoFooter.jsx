import { Link } from "react-router-dom";
import { BiComment } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";

import "./Todo.css";
import { useState } from "react";
import { FindUserById, GetLoggedInUser } from "../../selectors";
import IconButton from "../IconButton";
import CommentSection from "../CommentSection";

const TodoFooter = ({ todo }) => {
    const [toggleCommentSection, setToggleCommentSection] = useState(false);
    const user = FindUserById(todo.userId);

    const commentSectionHandler = () =>
        setToggleCommentSection((prevState) => !prevState);

    const formattedUsername = user?.username.slice(0, 2).toUpperCase();

    return (
        <>
            <div className={`todo-footer`}>
                <div className="todo-footer__username__container">
                    <Link
                        to={`/profile/${user?.id}`}
                        className="todo-footer__username"
                    >
                        {formattedUsername}
                    </Link>
                </div>
                <IconButton
                    onClick={commentSectionHandler}
                    Icon={FaCommentAlt}
                    variant="gray"
                    className="text-md"
                />
            </div>
            {toggleCommentSection ? <CommentSection todoId={todo.id} /> : null}
        </>
    );
};

export default TodoFooter;
