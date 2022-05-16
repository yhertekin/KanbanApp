import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import LabelList from "../LabelList";

import "./Todo.css";

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className="todo__content">
                <TodoHeader todo={todo} />
                <LabelList labelIdList={todo.labelIdList} className="mb-5" />
                <TodoFooter todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
