import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    newTodo: (state, action: PayloadAction<ITodo>) => {},
    deleteTodo: (state, action: PayloadAction<number>) => {},
    setCompletedTodo: (state, action: PayloadAction<number>) => {},
    updateTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {},
  },
});

export const { newTodo, deleteTodo, setCompletedTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
