import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/usersSlice";

import Input from "../Input";
import Button from "../Button";

import styles from "./UserLogin.module.css";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.login}>
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
      <Button onClick={() => dispatch(loginUser({ email, password }))}>
        Login
      </Button>
    </div>
  );
};

export default UserLogin;
