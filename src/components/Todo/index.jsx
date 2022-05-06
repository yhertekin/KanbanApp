import { useState } from "react";

import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import CommentSection from "../CommentSection";
import Label from "../Label";
import { GetAllLabels, GetLabelById } from "../../selectors";

import "./Todo.css";
import LabelList from "../LabelList";

const Todo = ({ todo }) => {
    const allLabels = GetAllLabels();
    const labels = todo.labelIdList.map((labelId) =>
        allLabels.find((item) => item.id === labelId)
    );

    return (
        <div className="todo">
            <div className="todo__content">
                <div className="flex justify-between items-start mb-1">
                    <div>{todo.task}</div>
                    <TodoHeader todo={todo} />
                </div>
                <LabelList labels={labels} />
                <TodoFooter todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
