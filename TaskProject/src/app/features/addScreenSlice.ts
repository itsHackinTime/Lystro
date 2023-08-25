import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit"

import { StepData } from "../../types/types";
type Task = {
  id: string,
  title: string,
  rating: number,
  category: string,
  steps: StepData[]
}
interface TasksState {
  tasks: Task[],
}

const initialState: Task = {
  id: '',
  title: '',
  rating: 

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