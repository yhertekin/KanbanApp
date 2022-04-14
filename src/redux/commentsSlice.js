import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
    localStorage.setItem("commentList", JSON.stringify(newState));
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        items: JSON.parse(localStorage.getItem("commentList")) || [],
    },
    reducers: {
        addComment: (state, action) => {
            const comment = {
                id: nanoid(),
                todoId: action.payload.todoId,
                userId: action.payload.userId,
                text: action.payload.text,
            };
            state.items = [comment, ...state.items];
            updateStorage(state.items);
        },
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
