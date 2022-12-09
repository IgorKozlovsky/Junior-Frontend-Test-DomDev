import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

export interface todoState {
  todos: ITodo[];
}

const initialState: todoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initTodo: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
    newTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setCompletedTodo: (state, action: PayloadAction<number>) => {
      state.todos.map((todo) => (todo.id === action.payload ? (todo.isCompleted = !todo.isCompleted) : todo));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {
      state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { newTodo, deleteTodo, setCompletedTodo, updateTodo, initTodo } = todoSlice.actions;
export default todoSlice.reducer;
