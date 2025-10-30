import { createSlice } from '@reduxjs/toolkit'


const savedTodos = localStorage.getItem("todos");

const initialState = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id !== action.payload.id ? todo : action.payload
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;