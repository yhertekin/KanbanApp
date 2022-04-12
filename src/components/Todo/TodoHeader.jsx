import React from "react";

import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { MdFormatColorFill } from "react-icons/md";
import {
  removeTodo,
  setStatusTest,
  setStatusInProgress,
  setStatusCompleted,
} from "../../redux/todosSlice";
import { useDispatch } from "react-redux";
import IconButton from "../IconButton";

import styles from "./Todo.module.css";

const TodoHeader = ({ todo, setEdit }) => {
  const dispatch = useDispatch();
  const { id, status } = todo;

  const TrashIcon = () => (
    <IconButton
      Icon={FaTrashAlt}
      onClick={() => dispatch(removeTodo(id))}
      variant="black"
    />
  );

  const EditIcon = () => (
    <IconButton
      Icon={FiEdit}
      variant="black"
      onClick={() => setEdit((prevState) => !prevState)}
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
          case "completed":
            console.log("hello  ");
            dispatch(removeTodo(id));
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

  return (
    <div className={styles["todo__header"]}>
      {status === "review" ? (
        <>
          <TrashIcon />
          <EditIcon />
          <SuccessIcon />
          <IconButton Icon={MdFormatColorFill} className="font-lg" />
        </>
      ) : status === "in_progress" ? (
        <>
          <SuccessIcon />
        </>
      ) : status === "test" ? (
        <>
          <FailIcon />
          <SuccessIcon />
        </>
      ) : (
        status === "completed" && (
          <>
            <SuccessIcon />
          </>
        )
      )}
    </div>
  );
};

export default TodoHeader;
