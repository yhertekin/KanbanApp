import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import usersSlice from "./usersSlice";
import commentsSlice from "./commentsSlice";
import labelsSlice from "./labelsSlice";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
        users: usersSlice,
        comments: commentsSlice,
        labels: labelsSlice,
    },
});
