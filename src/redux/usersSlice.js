import { createSlice, nanoid } from "@reduxjs/toolkit";
import users from "../data/userData.json";

const updateStorage = (item, newState) => {
    localStorage.setItem(item, JSON.stringify(newState));
};

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || {},
        items: JSON.parse(localStorage.getItem("usersList")) || [],
        // items: users,
    },
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                ...action.payload,
            };
            state.items = [user, ...state.items];
            updateStorage("usersList", state.items);
        },

        removeUser: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((user) => user.id !== id);
            updateStorage("usersList", state.items);
        },

        // selectUser: (state, action) => {
        //     const id = action.payload;
        //     state.currentUser = state.items.find((user) => user.id === id);
        // },

        loginUser: (state, action) => {
            const user = action.payload;
            state.loggedInUser = user;
            updateStorage("loggedInUser", state.loggedInUser);
        },

        logoutUser: (state, action) => {
            state.loggedInUser = {};
            updateStorage("loggedInUser", state.loggedInUser);
        },
    },
});

export const { addUser, selectUser, removeUser, loginUser, logoutUser } =
    usersSlice.actions;
export default usersSlice.reducer;
