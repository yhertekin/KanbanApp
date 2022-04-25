import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsCalendarDate } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import { removeTodo } from "../../redux/todosSlice";
import Modal from "../Modal";
import DialogBox from "../DialogBox";

import "./Todo.css";
import { useState } from "react";

const formatDate = (date) => {
    if (typeof date === "string") date = new Date(date);
    return date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : null;
};

const TodoFooter = ({ todo }) => {
    const [showTodoRemoveAlert, setShowTodoRemoveAlert] = useState(false);
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);

    const TrashIcon = () => (
        <IconButton
            Icon={FaTrashAlt}
            onClick={() => setShowTodoRemoveAlert(true)}
        />
    );

    const CalendarIcon = () => (
        <IconButton Icon={BsCalendarDate} variant="black" className="mr-1" />
    );
    const users = useSelector((state) => state.users.items);
    const user = users.find((user) => user.id === todo.userId);

    return (
        <div className={`todo__footer todo--${todo.color}_light`}>
            <div className="todo__footer__date">
                <CalendarIcon />
                <span>{formatDate(todo.createdAt)}</span>
            </div>
            <Link to={`/profile/${user.id}`}>{user.username}</Link>
            {todo.status === "review" && loggedInUser?.userType === "admin" ? (
                <>
                    <TrashIcon />
                    {showTodoRemoveAlert && (
                        <Modal showModal={setShowTodoRemoveAlert}>
                            <DialogBox
                                todo={todo}
                                setShowTodoRemoveAlert={setShowTodoRemoveAlert}
                            />
                        </Modal>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default TodoFooter;
