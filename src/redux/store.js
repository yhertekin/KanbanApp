import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projectsSlice";

export const store = configureStore({
    reducer: {
        projects: projectsSlice,
    },
});
