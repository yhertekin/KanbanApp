import { useState } from "react";
import { BiComment } from "react-icons/bi";

import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import ColorPicker from "../ColorPicker";
import CommentSection from "../CommentSection";
import IconButton from "../IconButton";

import "./Todo.css";

const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [colorPicker, setColorPicker] = useState(false);
    const [toggleCommentSection, setToggleCommentSection] = useState(false);

    const commentSectionHandler = () =>
        setToggleCommentSection((prevState) => !prevState);

    return (
        <div className="todo">
            <TodoHeader todo={todo} />
            <div className="todo__content">
                <div className="flex justify-between items-center px-2">
                    <div>{todo.task}</div>
                    <IconButton
                        onClick={commentSectionHandler}
                        Icon={BiComment}
                        variant="black"
                    />
                </div>
                {toggleCommentSection ? (
                    <CommentSection todoId={todo.id} />
                ) : null}
            </div>
        </div>
    );
};

export default Todo;
