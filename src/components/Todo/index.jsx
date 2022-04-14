import styles from "./Todo.module.css";
import { useState } from "react";
import EditTodo from "../EditTodo";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import ColorPicker from "../ColorPicker";
import CommentList from "../CommentList";
import CommentInput from "../CommentInput";

import { useSelector } from "react-redux";

const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const [colorPicker, setColorPicker] = useState(false);
    const [toggleComment, setToggleComment] = useState(false);

    const comments = useSelector((state) => state.comments.items);

    return (
        <div className={`${styles.todo}`}>
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
                    <div>{todo.task}</div>
                )}
                <button
                    onClick={() => setToggleComment((prevState) => !prevState)}
                >
                    Comments
                </button>
                {toggleComment ? (
                    <>
                        <CommentInput todoId={todo.id} userId="1" />

                        <CommentList
                            comments={comments.filter(
                                (comment) => comment.todoId === todo.id
                            )}
                        />
                    </>
                ) : null}
            </div>
            <TodoFooter todo={todo} />
        </div>
    );
};

export default Todo;
