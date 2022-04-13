import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/usersSlice";

import Button from "../Button";
import Input from "../Input";
import Dropdown from "../Dropdown";

import styles from "./UserRegister.module.css";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const userTypes = [
    { key: "user", value: "user" },
    { key: "admin", value: "admin" },
  ];

  const dispatch = useDispatch();
  return (
    <div className={styles.register}>
      <Input value={username} setValue={setUsername} placeholder="Username" />
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <Dropdown
        dropdownValue={userType}
        setDropdownValue={setUserType}
        placeholder="Select user type"
        items={userTypes}
      />
      <Button
        onClick={() =>
          dispatch(addUser({ email, password, username, userType }))
        }
      >
        Register
      </Button>
    </div>
  );
};

export default UserRegister;
