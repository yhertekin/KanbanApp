import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
  localStorage.setItem("usersList", JSON.stringify(newState));
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    items: JSON.parse(localStorage.getItem("usersList")) || [],
  },
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        username: action.payload,
      };
      state.items = [user, ...state.items];
      updateStorage(state.items);
    },
    removeUser: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((user) => user.id !== id);
      updateStorage(state.items);
    },
    selectUser: (state, action) => {
      const id = action.payload;
      state.currentUser = state.items.find((user) => user.id === id);
    },
  },
});

export const { addUser, selectUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
