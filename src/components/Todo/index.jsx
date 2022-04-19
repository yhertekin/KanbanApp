import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";

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
            {todo.status !== "completed" ? (
                <TodoHeader
                    todo={todo}
                    setEdit={setEdit}
                    setColorPicker={setColorPicker}
                />
            ) : null}

            <div className={`todo__content todo--${todo.color}_dark`}>
                {edit ? (
                    <EditTodo todo={todo} setEdit={setEdit} />
                ) : colorPicker ? (
                    <ColorPicker todo={todo} />
                ) : (
                    <div>
                        <div className="flex justify-between items-start">
                            <div className="w-11/12">{todo.task}</div>
                            <IconButton
                                onClick={commentSectionHandler}
                                Icon={BiCommentDetail}
                                variant="black"
                            />
                        </div>
                        {toggleCommentSection ? (
                            <CommentSection todoId={todo.id} />
                        ) : null}
                    </div>
                )}
            </div>
            <TodoFooter todo={todo} />
        </div>
    );
};

export default Todo;
