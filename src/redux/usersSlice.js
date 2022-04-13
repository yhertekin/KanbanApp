import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (item, newState) => {
  localStorage.setItem(item, JSON.stringify(newState));
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
    items: JSON.parse(localStorage.getItem("usersList")) || [],
  },
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        username: action.payload.username,
        email: action.payload.email,
        userType: action.payload.userType,
        isLoggedIn: false,
        password: action.payload.password, // hashlenmeli
      };
      console.log(user);
      state.items = [user, ...state.items];
      updateStorage("usersList", state.items);
    },
    removeUser: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((user) => user.id !== id);
      updateStorage("usersList", state.items);
    },
    selectUser: (state, action) => {
      const id = action.payload;
      state.currentUser = state.items.find((user) => user.id === id);
    },

    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.items.find((user) => user.email === email);
      console.log(user);
      if (!user || user.password !== password) return;
      user.isLoggedIn = true;
      state.currentUser = user;
      // updateStorage("usersList", state.items);
      updateStorage("currentUser", state.currentUser);
    },
    logoutUser: (state, action) => {
      const id = state.currentUser.id;
      const user = state.items.find((user) => user.id === id);
      user.isLoggedIn = false;
      state.currentUser = {};
      updateStorage("currentUser", state.currentUser);
    },
  },
});

export const { addUser, selectUser, removeUser, loginUser, logoutUser } =
  usersSlice.actions;
export default usersSlice.reducer;
