import { useEffect, useState } from "react";
//custom
import LabelList from "../Label/LabelList";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import LabelPicker from "../Label/LabelPicker";
import { TodoContext, useTodo } from "../../context/TodoContext";
import { useUser } from "../../context/UserContext";
import eventBus from "../../EventBus";

//third
//css
import "./TodoCreateForm.css";
import { SelectProjectById } from "../../selectors";
import { getItemFromLocalStorage } from "../../functions";

const TodoCreateForm = ({ className, setShowTodoInput }) => {
    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const [labels, setLabels] = useState([]);
    const [added, setAdded] = useState(false);

    const { todos, createTodo } = useTodo();
    const { users, loggedInUser } = useUser();
    const currentProject = SelectProjectById(loggedInUser.currentProject);

    useEffect(() => {
        if (added) {
            eventBus.dispatch("todoAdded", {
                todos: todos,
            });
            setShowTodoInput(false);
        }
    }, [added]);

    const participants = currentProject?.participants.map((userId) =>
        users.find((user) => user.id === userId)
    );

    const dropdownItems =
        participants?.map((user) => ({
            key: user.id,
            value: user.username,
        })) || [];

    const dropdownChangeHandler = (e) => setDropdownValue(e.target.value);
    const inputChangeHandler = (e) => setInputValue(e.target.value);
    const showTodoHandler = (e) => setShowTodoInput(false);

    const labelHandler = (e, label) => {
        const isLabelCurrent = labels.find((item) => item.id === label.id);
        if (isLabelCurrent) {
            setLabels((prevState) => [
                ...prevState.filter((item) => item.id !== label.id),
            ]);
            e.target.classList.remove("opacity-50");
        } else {
            setLabels((prevState) => [...prevState, label]);
            e.target.classList.add("opacity-50");
        }
    };

    const addButtonHandler = () => {
        if (inputValue === "") {
            setWarningMessage("Todo field can not be empty!");
            return;
        }
        if (dropdownValue === "") {
            setWarningMessage("Please select a user!");
            return;
        }

        createTodo({
            project: currentProject.id,
            participant: dropdownValue,
            task: inputValue,
            labels: labels,
        });

        setAdded(true);

        setInputValue("");
        setDropdownValue("");
        setWarningMessage("");
    };

    return (
        <div className={`todo-create-form ${className ?? ""}`}>
            {warningMessage && (
                <Alert
                    message={warningMessage}
                    variant="warning"
                    className="mb-2"
                />
            )}
            <div>
                <Input
                    placeholder="Todo"
                    variant="primary"
                    value={inputValue}
                    onChange={inputChangeHandler}
                />

                <Dropdown
                    value={dropdownValue}
                    onChange={dropdownChangeHandler}
                    className="mt-2"
                    placeholder="Select a user"
                    items={dropdownItems}
                />
                <LabelList labels={labels} />
                <LabelPicker labelHandler={labelHandler} />

                <div className="todo-create-form__footer">
                    <Button
                        children="Cancel"
                        variant="danger"
                        onClick={showTodoHandler}
                        className="w-5/12 py-1 px-2"
                    />
                    <Button
                        children="Add"
                        variant="primary"
                        onClick={addButtonHandler}
                        className="w-5/12 py-1 px-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoCreateForm;
