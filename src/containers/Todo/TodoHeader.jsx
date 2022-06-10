import { useState } from "react";
//custom
import IconButton from "../../components/IconButton";
import Modal from "../../components/Modal";
import DialogBox from "../../components/Modal/DialogBox";
import { useTodo } from "../../context/TodoContext";
//third
import { FaCheck, FaTimes } from "react-icons/fa";
//css
import "./TodoHeader.css";

const TodoHeader = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const [dialogBoxType, setDialogBoxType] = useState("task__success");

    const { id, status } = todo;
    const {
        setStatusReview,
        setStatusInProgress,
        setStatusTest,
        setStatusCompleted,
    } = useTodo();

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
        setStatusInProgress(id);
    };

    const taskSuccessDialogHandler = () => {
        setDialogBoxType("task__success");
        switch (status) {
            case "review":
                setStatusInProgress(id);
                break;
            case "in_progress":
                setStatusTest(id);
                break;
            case "test":
                setStatusCompleted(id);
                break;
        }
    };

    return (
        <div className={`todo-header`}>
            <div className="mr-auto">{todo.task}</div>
            {status === "test" && <FailIcon />}
            {status !== "completed" && <SuccessIcon />}
            {showModal && (
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
            )}
        </div>
    );
};

export default TodoHeader;
