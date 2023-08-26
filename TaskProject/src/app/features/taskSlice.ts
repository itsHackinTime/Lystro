import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit"
 import { Task } from "../../types/types";

interface TasksState {
  tasks: Task[],
  selectedId: string,

}

const initialState: TasksState = {
  tasks: [],
  selectedId: ''
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      state.tasks.sort((a,b) => a.rating - b.rating)
    },
    setSelectedId(state, payload: PayloadAction<string>) {
      state.selectedId = payload.payload
    }
  }
});

export const { addTask, setSelectedId } = tasksSlice.actions;

export const tasksReducer: Reducer<TasksState> = tasksSlice.reducer;