import React from "react";

import { FaTrashAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { removeTodo, toogleTodoState } from "../../redux/todosSlice";
import { useDispatch } from "react-redux";
import IconButton from "../IconButton";

import styles from "./Todo.module.css";

const TodoHeader = ({ todo, setEdit }) => {
  const dispatch = useDispatch();

  const trashIcon = () => (
    <IconButton
      Icon={FaTrashAlt}
      onClick={() => dispatch(removeTodo(todo.id))}
      variant="black"
    />
  );

  const editIcon = () => (
    <IconButton
      Icon={FiEdit}
      variant="black"
      onClick={() => setEdit((prevState) => !prevState)}
    />
  );

  const successIcon = () => (
    <IconButton
      Icon={FaChevronRight}
      onClick={() =>
        dispatch(
          toogleTodoState({
            id: todo.id,
            todoStatusSuccessFail: "SUCCESS",
          })
        )
      }
    />
  );

  const failIcon = () => (
    <IconButton
      Icon={FaChevronLeft}
      onClick={() =>
        dispatch(
          toogleTodoState({
            id: todo.id,
            todoStatusSuccessFail: "FAIL",
          })
        )
      }
    />
  );

  const todoStatusIcons = {
    REVIEW: [trashIcon, editIcon, successIcon],
    IN_PROGRESS: [successIcon],
    TEST: [failIcon, successIcon],
    DONE: [successIcon],
  };

  return (
    <div className={styles["todo__header"]}>
      {todoStatusIcons[todo.status].map((Iconbtn, key) => (
        <Iconbtn key={key} />
      ))}
    </div>
  );
};

export default TodoHeader;
