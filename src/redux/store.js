import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import usersSlice from "./usersSlice";
import commentsSlice from "./commentsSlice";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
        users: usersSlice,
        comments: commentsSlice,
    },
});
