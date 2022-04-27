import { useState } from "react";

import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import CommentSection from "../CommentSection";

import "./Todo.css";

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className="todo__content">
                <div className="flex justify-between items-center px-2">
                    <div>{todo.task}</div>
                    <TodoHeader todo={todo} />
                </div>

                <TodoFooter todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
