import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit"
 import { Task } from "../../types/types";

interface TasksState {
  tasks: Task[],
}

const initialState: TasksState = {
  tasks: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      state.tasks.sort((a,b) => a.rating - b.rating)
    }
  }
});

export const { addTask } = tasksSlice.actions;

export const tasksReducer: Reducer<TasksState> = tasksSlice.reducer;