import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
    localStorage.setItem("labelList", JSON.stringify(newState));
};

export const labelsSlice = createSlice({
    name: "labels",
    initialState: {
        items: JSON.parse(localStorage.getItem("labelList")) || [],
    },
    reducers: {
        addLabel: (state, action) => {
            const label = {
                id: nanoid(),
                todoId: action.payload.todoId,
                text: action.payload.text,
                color: action.payload.color,
            };
            state.items = [label, ...state.items];
            updateStorage(state.items);
        },
    },
});

export const { addLabel } = labelsSlice.actions;
export default labelsSlice.reducer;
