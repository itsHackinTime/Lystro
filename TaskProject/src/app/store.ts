import { configureStore } from '@reduxjs/toolkit';
import {tasksReducer } from './features/taskSlice';
import { addTaskInputReducer }from './features/addScreenSlice' 
const store = configureStore({
  reducer: {
    tasksReducer,
    addTaskInputReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
