import React from "react";

import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { MdFormatColorFill } from "react-icons/md";
import {
    setStatusTest,
    setStatusInProgress,
    setStatusCompleted,
} from "../../redux/todosSlice";
import { useDispatch } from "react-redux";
import IconButton from "../IconButton";

import styles from "./Todo.module.css";

const TodoHeader = ({ todo, setEdit, setColorPicker }) => {
    const dispatch = useDispatch();
    const { id, status } = todo;

    const EditIcon = () => (
        <IconButton
            Icon={FiEdit}
            variant="black"
            onClick={() => {
                setEdit((prevState) => !prevState);
                setColorPicker(false);
            }}
        />
    );

    const SuccessIcon = () => (
        <IconButton
            Icon={FaCheck}
            onClick={() => {
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
            }}
            variant="secondary"
        />
    );

    const FailIcon = () => (
        <IconButton
            Icon={ImCancelCircle}
            onClick={() => dispatch(setStatusInProgress(id))}
            variant="danger"
        />
    );

    const ColorIcon = () => (
        <IconButton
            Icon={MdFormatColorFill}
            className="font-lg"
            onClick={() => {
                setEdit(false);
                setColorPicker((prevState) => !prevState);
            }}
        />
    );
    return (
        <div className={`${styles["todo__header"]} ${todo.color.light}`}>
            {status === "review" ? (
                <>
                    <ColorIcon />
                    <EditIcon />
                    <SuccessIcon />
                </>
            ) : status === "in_progress" ? (
                <>
                    <ColorIcon />
                    <SuccessIcon />
                </>
            ) : status === "test" ? (
                <>
                    <ColorIcon />
                    <FailIcon />
                    <SuccessIcon />
                </>
            ) : null}
        </div>
    );
};

export default TodoHeader;
