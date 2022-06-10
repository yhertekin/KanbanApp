//custom
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import LabelList from "../Label/LabelList";
//third
//css
import "./Todo.css";

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className="todo__content">
                <TodoHeader todo={todo} />
                <LabelList labels={todo.labels} className="mb-5" />
                <TodoFooter todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
