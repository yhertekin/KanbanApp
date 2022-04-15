import { useState } from "react";
import { useSelector } from "react-redux";
import { BiCommentDetail } from "react-icons/bi";

import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import ColorPicker from "../ColorPicker";
import CommentList from "../CommentList";
import CommentInput from "../CommentInput";
import CommentSection from "../CommentSection";
import IconButton from "../IconButton";

import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [colorPicker, setColorPicker] = useState(false);
    const [toggleCommentSection, setToggleCommentSection] = useState(false);

    const [dragData, setDragData] = useState(); // id, origin, and destination

    const handleDragStart = (e, id, status) => {
        setDragData({ id, status });
    };

    const handleDragEnter = (e, status, target, index) => {
        // add alert
        console.log(e.target.draggable);
        if (status !== target.status) return;
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        if (e.target.draggable);
        {
            e.target.classList.add("mb-10");
        }
    };

    const handleDrop = (e) => {
        if (e.target.draggable) {
            console.log("enter");
        }
    };

    return (
        <div
            className={`${styles.todo}`}
            // draggable
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
        >
            {todo.status !== "completed" ? (
                <TodoHeader
                    todo={todo}
                    setEdit={setEdit}
                    setColorPicker={setColorPicker}
                />
            ) : null}

            <div
                className={`${
                    styles[
                        todo.status === "completed"
                            ? "content__completed"
                            : "content__not__completed"
                    ]
                } ${styles[`${todo.color}--dark`]}`}
            >
                {edit ? (
                    <EditTodo todo={todo} setEdit={setEdit} />
                ) : colorPicker ? (
                    <ColorPicker todo={todo} />
                ) : (
                    <div>
                        <div className="flex justify-between items-start">
                            <div className="w-11/12">{todo.task}</div>
                            <IconButton
                                onClick={() =>
                                    setToggleCommentSection(
                                        (prevState) => !prevState
                                    )
                                }
                                Icon={BiCommentDetail}
                                className="my-2"
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
