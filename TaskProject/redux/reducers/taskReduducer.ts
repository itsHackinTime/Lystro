import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit"

type Task = {
  id: string,
  title: string,
  rating: number,
  category: string,
  steps: string[]
}
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
    }
  }
});

export const { addTask } = tasksSlice.actions;

export const tasksReducer: Reducer<TasksState> = tasksSlice.reducer;