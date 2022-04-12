import { createSlice, nanoid } from "@reduxjs/toolkit";

const updateStorage = (newState) => {
  localStorage.setItem("todoList", JSON.stringify(newState));
};
// const STATUS = {
//   REVIEW:  "review",
//   IN_PROGRESS: "in_progress",
//   TEST: {
//     IN_TEST: "in_test",
//     FAIL: "test_fail",
//     SUCCESS: "test_success",
//   },
//   DONE: "done",
// };

const STATUS = {
  REVIEW: {
    CURRENT: "REVIEW",
    SUCCESS: "IN_PROGRESS",
  },
  IN_PROGRESS: {
    SUCCESS: "TEST",
  },
  TEST: {
    FAIL: "IN_PROGRESS",
    SUCCESS: "DONE",
  },
  DONE: {
    SUCCESS: "",
  },
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

    toogleTodoState: (state, action) => {
      const { id, todoStatusSuccessFail } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      todo.status = STATUS[todo.status][todoStatusSuccessFail].NEXT;

      // switch (todo.status) {
      //   case STATUS.REVIEW:
      //     todo.status = STATUS.IN_PROGRESS;
      //     break;
      //   case STATUS.IN_PROGRESS:
      //     todo.state = STATUS.TEST;
      //     break;
      // }
      updateStorage(state.items);
    },
  },
});

export const { addTodo, removeTodo, toogleTodoState, editTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
