import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice,
  },
});
