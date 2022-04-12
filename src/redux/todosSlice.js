import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
  localStorage.setItem("todoList", JSON.stringify(newState));
};

const findTodoById = (id, list) => list.find((item) => item.id === id);

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
        status: STATUS.REVIEW.CURRENT,
        task: action.payload.task,
        userId: action.payload.userId,
        // createdAt: new Date(),
      };
      state.items = [todo, ...state.items];

      updateStorage(state.items);
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo.status !== STATUS.REVIEW.CURRENT) return;
      state.items = state.items.filter((item) => item.id !== id);
      updateStorage(state.items);
    },

    editTodo: (state, action) => {
      const { id, task, userId } = action.payload;
      const index = state.items.findIndex((todo) => todo.id === id);
      if (state.items[index].status !== STATUS.REVIEW.CURRENT) return;
      state.items[index] = {
        ...state.items[index],
        task: task,
        userId: userId,
      };
      updateStorage(state.items);
    },
    setStatusReview: (state, action) => {
      const todo = findTodoById((id = action.payload), (list = state.items));
      todo.status = STATUS.REVIEW;
      updateStorage(state.items);
    },

    setStatusInProgress: (state, action) => {
      const todo = findTodoById((id = action.payload), (list = state.items));
      if (![STATUS.REVIEW, STATUS.TEST].includes(todo.status)) return;
      todo.status = STATUS.IN_PROGRESS;
    },

    setStatusTest: (state, action) => {
      const todo = findTodoById((id = action.payload), (list = state.items));
      if (todo.status !== STATUS.IN_PROGRESS) return;
      todo.status = STATUS.TEST;
    },

    setStatusComplete: (state, action) => {
      const todo = findTodoById((id = action.payload), (list = state.items));
      if (todo.status !== STATUS.TEST) return;
      todo.status = STATUS.COMPLETED;
    },
  },
});

export const { addTodo, removeTodo, toogleTodoState, editTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
