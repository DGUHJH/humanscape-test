import { createSlice } from '@reduxjs/toolkit';

export type Tag = {
  id: string;
  value: string;
};

export type TodoData = {
  id: string;
  value: string;
  isDone: boolean;
  tags: Tag[];
};

export type TodoInitialStateType = {
  todoListData: TodoData[];
};

const initialState: TodoInitialStateType = {
  todoListData: [
    {
      id: 'todo_0',
      value: 'test',
      isDone: false,
      tags: [
        { id: 'tag_0', value: 'test' },
        { id: 'tag_1', value: 'test2' },
      ],
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    onTodoListCreate: (state, action) => {
      state.todoListData = action.payload.todo;
    },
    onTodoCreate: (state) => {
      state.todoListData.push({
        id: `todo_${
          state.todoListData.length !== 0
            ? Number(
                state.todoListData[state.todoListData.length - 1].id.split(
                  'todo_'
                )[1]
              ) + 1
            : 1
        }`,
        value: '입력해주세요.',
        isDone: false,
        tags: [{ id: 'tag_0', value: '태그_0' }],
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
    onTodoTagCreate: (state, action) => {
      state.todoListData = state.todoListData.map((todoData) =>
        todoData.id === action.payload.id
          ? {
              ...todoData,
              tags: [
                ...todoData.tags,
                {
                  id: `tag_${
                    todoData.tags.length !== 0
                      ? Number(
                          todoData.tags[todoData.tags.length - 1].id.split(
                            'tag_'
                          )[1]
                        ) + 1
                      : 1
                  }`,
                  value: `태그_${
                    todoData.tags.length !== 0
                      ? Number(
                          todoData.tags[todoData.tags.length - 1].id.split(
                            'tag_'
                          )[1]
                        ) + 1
                      : 1
                  }`,
                },
              ],
            }
          : todoData
      );
    },
    onTodoTagDelete: (state, action) => {
      state.todoListData = state.todoListData.map((todoData) =>
        todoData.id === action.payload.id
          ? {
              ...todoData,
              tags: todoData.tags.filter(
                (tag) => tag.id !== action.payload.tagId
              ),
            }
          : todoData
      );
    },
    onTodoTagChange: (state, action) => {
      state.todoListData = state.todoListData.map((todoData) =>
        todoData.id === action.payload.id
          ? {
              ...todoData,
              tags: todoData.tags.map((tag) =>
                tag.id === action.payload.tagId
                  ? { ...tag, value: action.payload.value }
                  : tag
              ),
            }
          : todoData
      );
    },
  },
});

export const {
  onTodoCreate,
  onTodoChange,
  onTodoDelete,
  onTodoToggle,
  onTodoListCreate,
  onTodoTagCreate,
  onTodoTagDelete,
  onTodoTagChange,
} = todoSlice.actions;

export default todoSlice.reducer;
