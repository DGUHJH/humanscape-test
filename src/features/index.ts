import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from 'features/todo/todoSlice';

const rootReducer = combineReducers({
  todo: todoSlice,
});
export type ReducerType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export default store;
