import { GetAllTodos } from "../../selectors";

import SettingsTodo from "../SettingsTodo";

import "./SettingsTodoList.css";

const SettingsTodoList = () => {
    const todos = GetAllTodos();

    return (
        <div className="settings-todo-list">
            <div className="settings-todo-list__header">
                <h3>Username</h3>
                <h3>Task</h3>
                <h3>Date</h3>
                <h3>Status</h3>
            </div>
            {todos.map((todo, index) => (
                <SettingsTodo todo={todo} key={index} />
            ))}
        </div>
    );
};

export default SettingsTodoList;
