import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

import {
    setStatusTest,
    setStatusInProgress,
    setStatusCompleted,
} from "../../redux/todosSlice";
import IconButton from "../IconButton";
import Modal from "../Modal";
import DialogBox from "../DialogBox";

import "./Todo.css";
import TodoEdit from "../TodoEdit";

const TodoHeader = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const [dialogBoxType, setDialogBoxType] = useState("task__success");
    const [showEditTodo, setShowEditTodo] = useState(false);
    const dispatch = useDispatch();
    const { id, status } = todo;

    const EditIcon = () => (
        <IconButton
            Icon={AiOutlineEdit}
            className="edit__icon"
            onClick={() => setShowEditTodo(true)}
        />
    );

    const SuccessIcon = () => (
        <IconButton
            Icon={FaCheck}
            onClick={() => {
                setShowModal(true);
                setDialogBoxType("task__success");
            }}
            variant="primary"
            className="text-lg"
        />
    );

    const FailIcon = () => (
        <IconButton
            Icon={FaTimes}
            onClick={() => {
                setShowModal(true);
                setDialogBoxType("task__fail");
            }}
            variant="danger"
            className="text-xl mr-2"
        />
    );

    const taskFailedDialogHandler = () => {
        dispatch(setStatusInProgress(id));
    };

    const taskSuccessDialogHandler = () => {
        setDialogBoxType("task__success");
        switch (status) {
            case "review":
                dispatch(setStatusInProgress(id));
                break;
            case "in_progress":
                dispatch(setStatusTest(id));
                break;
            case "test":
                dispatch(setStatusCompleted(id));
                break;
        }
    };

    return (
        <div className={`todo__header todo--${todo.color}`}>
            <EditIcon />
            {showEditTodo ? (
                <Modal showModal={setShowEditTodo}>
                    <TodoEdit todo={todo} setShowEditTodo={setShowEditTodo} />
                </Modal>
            ) : null}

            {status === "test" ? <FailIcon /> : null}
            {status !== "completed" ? <SuccessIcon /> : null}
            {showModal ? (
                <Modal showModal={setShowModal}>
                    {dialogBoxType === "task__fail" ? (
                        <DialogBox
                            text="Failed on test?"
                            setCancelButton={setShowModal}
                            setConfirmButton={taskFailedDialogHandler}
                        />
                    ) : (
                        <DialogBox
                            text="Success on task?"
                            setCancelButton={setShowModal}
                            setConfirmButton={taskSuccessDialogHandler}
                        />
                    )}
                </Modal>
            ) : null}
        </div>
    );
};

export default TodoHeader;
