import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/usersSlice";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import TodoList from "../TodoList";
import Alert from "../Alert";
import IconButton from "../IconButton";
import styles from "./User.module.css";

const User = ({ user }) => {
  const todoList = useSelector((state) => state.todos.items);
  const todos = todoList.filter((todo) => todo.userId === user.id);
  const [showTodos, setShowTodos] = useState(false);

  const dispatch = useDispatch();

  const todoCount = todos.length;

  const toogleShowTodos = () => setShowTodos((prevState) => !prevState);
  let iconType = showTodos ? BiShowAlt : BiHide;

  return (
    <li className={styles}>
      <div className={styles.user}>
        <div className="col-span-2">{user.username}</div>
        <div className="col-span-2">
          You have {todoCount} todo{todoCount > 1 ? "s" : ""}.
        </div>
        <div className={styles.buttons}>
          <IconButton
            Icon={iconType}
            onClick={toogleShowTodos}
            variant="black"
          />
          <IconButton
            Icon={FaTrashAlt}
            variant="danger"
            onClick={() => dispatch(removeUser(user.id))}
          />
        </div>
      </div>
      {showTodos && todoCount !== 0 && <TodoList todos={todos} />}
      {showTodos && todoCount === 0 && (
        <Alert
          message="There is not any task here."
          variant="danger"
          className="mt-1"
        />
      )}
    </li>
  );
};

export default User;
