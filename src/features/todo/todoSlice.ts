import { createSlice } from '@reduxjs/toolkit';

export type TodoData = {
  id: string;
  value: string;
  isDone: boolean;
};

export type TodoInitialStateType = {
  todoListData: TodoData[];
};

const initialState: TodoInitialStateType = {
  todoListData: [{ id: 'todo_0', value: 'test', isDone: false }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    onTodoCreate: (state) => {
      state.todoListData.push({
        id: `todo_${state.todoListData.length}`,
        value: '입력해주세요.',
        isDone: false,
      });
    },
    onTodoChange: (state, action) => {
      state.todoListData = state.todoListData.map((todoData) =>
        todoData.id === action.payload.id
          ? { ...todoData, value: action.payload.value }
          : todoData
      );
    },
    onTodoDelete: (state, action) => {
      state.todoListData = state.todoListData.filter(
        (todoData) => todoData.id !== action.payload.id
      );
    },
    onTodoToggle: (state, action) => {
      state.todoListData = state.todoListData.map((todoData) =>
        todoData.id === action.payload.id
          ? { ...todoData, isDone: !todoData.isDone }
          : todoData
      );
    },
  },
});

export const { onTodoCreate, onTodoChange, onTodoDelete, onTodoToggle } =
  todoSlice.actions;

export default todoSlice.reducer;
