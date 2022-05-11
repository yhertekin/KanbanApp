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
                // todoId: action.payload.todoId,
                // isIn: false,
                text: action.payload.text,
                color: action.payload.color,
            };
            state.items = [label, ...state.items];
            updateStorage(state.items);
        },
        toggleIsIn: (state, action) => {
            const id = action.payload;
            const label = state.items.find((label) => label.id === id);
            label.isIn = !label.isIn;
        },
    },
});

export const { addLabel, toggleIsIn } = labelsSlice.actions;
export default labelsSlice.reducer;
