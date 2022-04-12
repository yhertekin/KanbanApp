import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/usersSlice";
import { addTodo } from "../../redux/todosSlice";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
import Alert from "../Alert";
import styles from "./TodoInput.module.css";

const TodoInput = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const users = useSelector((state) => state.users.items);
  const [dropdownValue, setDropdownValue] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const dropdownItems = users.map((user) => ({
    key: user.id,
    value: user.username,
  }));

  useEffect(() => {
    dispatch(selectUser(dropdownValue));
  }, [dropdownValue]);

  const buttonHandler = () => {
    if (inputValue === "") {
      setWarningMessage("Todo field can not be empty!");
      return;
    }
    if (!currentUser) {
      setWarningMessage("Please select a user!");
      return;
    }

    dispatch(addTodo({ task: inputValue, userId: currentUser.id }));
    setInputValue("");
    setDropdownValue("");
    setWarningMessage("");
  };

  return (
    <div>
      <div className={`${styles["input__grid"]} ${className ?? ""}`}>
        <Input
          placeholder="Todo"
          variant="primary"
          value={inputValue}
          setValue={setInputValue}
          className="col-span-2"
        />

        <Dropdown
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
          className="flex"
          placeholder="Select a user"
          items={dropdownItems}
        />
        <Button children="Add" variant="primary" onClick={buttonHandler} />
      </div>
      {warningMessage && (
        <Alert message={warningMessage} variant="warning" className="mt-1" />
      )}
    </div>
  );
};

export default TodoInput;
