import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
    localStorage.setItem("todoList", JSON.stringify(newState));
};

const findTodoById = (obj) => obj.list.find((item) => item.id === obj.id);

const STATUS = {
    REVIEW: "review",
    IN_PROGRESS: "in_progress",
    TEST: "test",
    COMPLETED: "completed",
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: { items: JSON.parse(localStorage.getItem("todoList")) || [] },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                status: STATUS.REVIEW,
                task: action.payload.task,
                userId: action.payload.userId,
                createdAt: new Date(),
                color: { light: "bg-yellow-200", dark: "bg-yellow-300" },
                // color: "yellow"
            };
            state.items = [todo, ...state.items];

            updateStorage(state.items);
        },

        removeTodo: (state, action) => {
            const id = action.payload;
            const todo = state.items.find((todo) => todo.id === id);
            if (![STATUS.REVIEW, STATUS.COMPLETED].includes(todo.status))
                return;
            state.items = state.items.filter((item) => item.id !== id);
            updateStorage(state.items);
        },

        editTodo: (state, action) => {
            const { id, task, userId } = action.payload;
            const index = state.items.findIndex((todo) => todo.id === id);
            if (state.items[index].status !== STATUS.REVIEW) return;
            state.items[index] = {
                ...state.items[index],
                task: task,
                userId: userId,
            };
            updateStorage(state.items);
        },

        setStatusReview: (state, action) => {
            const todo = findTodoById({
                id: action.payload,
                list: state.items,
            });
            todo.status = STATUS.REVIEW;
            updateStorage(state.items);
        },

        setStatusInProgress: (state, action) => {
            const todo = findTodoById({
                id: action.payload,
                list: state.items,
            });
            if (![STATUS.REVIEW, STATUS.TEST].includes(todo.status)) return;
            todo.status = STATUS.IN_PROGRESS;
            updateStorage(state.items);
        },

        setStatusTest: (state, action) => {
            const todo = findTodoById({
                id: action.payload,
                list: state.items,
            });
            if (todo.status !== STATUS.IN_PROGRESS) return;
            todo.status = STATUS.TEST;
            updateStorage(state.items);
        },

        setStatusCompleted: (state, action) => {
            const todo = findTodoById({
                id: action.payload,
                list: state.items,
            });
            if (todo.status !== STATUS.TEST) return;
            todo.status = STATUS.COMPLETED;
            updateStorage(state.items);
        },

        changeColor: (state, action) => {
            const todo = findTodoById({
                id: action.payload.id,
                list: state.items,
            });
            todo.color = action.payload.color;
            updateStorage(state.items);
        },
    },
});

export const {
    addTodo,
    removeTodo,
    editTodo,
    setStatusReview,
    setStatusInProgress,
    setStatusTest,
    setStatusCompleted,
    changeColor,
} = todosSlice.actions;
export default todosSlice.reducer;
