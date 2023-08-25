import { configureStore } from '@reduxjs/toolkit';
import {tasksReducer } from './features/taskSlice';

const store = configureStore({
  reducer: {
    tasksReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
