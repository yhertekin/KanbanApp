import { useDispatch } from "react-redux";

import { removeTodo } from "../../redux/todosSlice";

import Button from "../Button";

const TodoRemoveAlert = ({ todo, setShowTodoRemoveAlert }) => {
    const dispatch = useDispatch();

    const cancelButtonHandler = () => {
        setShowTodoRemoveAlert(false);
    };

    const confirmButtonHandler = () => {
        dispatch(removeTodo(todo.id));
        setShowTodoRemoveAlert(false);
    };

    return (
        <div className="">
            <p className="text-lg">Are you sure?</p>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
                <Button onClick={confirmButtonHandler}>Yes</Button>
                <Button
                    variant="danger"
                    onClick={cancelButtonHandler}
                    className=""
                >
                    No
                </Button>
            </div>
        </div>
    );
};

export default TodoRemoveAlert;
