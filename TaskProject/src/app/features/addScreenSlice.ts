import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit"
import 'react-native-get-random-values'
import {v4 as uuid } from 'uuid'
import { Task, StepData } from "../../types/types";



const initialState: Task = {
  id: uuid(),
  title: '',
  rating: 0,
  category: '',
  steps: [],
  ordered: false
}

const AddTaskInput = createSlice({
  name: 'addScreen',
  initialState,
  reducers: {
    addTitle(state, payload: PayloadAction<string>) {
      state.title = payload.payload
    },
    addRating(state, payload: PayloadAction<number>) {
      state.rating = payload.payload
    },
    addCategory(state, payload: PayloadAction<string>) {
      state.category = payload.payload
    },
    addSteps(state) {
      const id = uuid(), text = '', step = state.steps.length;
      state.steps.push({id, text, step})
    },
    editSteps(state, payload: PayloadAction<StepData>) {
      state.steps = state.steps.map(el => {
        if (el.id === payload.payload.id) el.text = payload.payload.text;
        return el;
      })
    },
    removeSteps(state, payload: PayloadAction<StepData>) {
      state.steps = state.steps
        .filter((el) => el.id !== payload.payload.id)
        .map((el, i) => {
          if (el.step !== i + 1) el.step = i + 1;
          return el
        });
    },
    changeOrdered(state) {
      state.ordered = !state.ordered
    }
  }
});

export const { addTitle, addRating, addCategory, addSteps, editSteps, removeSteps, changeOrdered } = AddTaskInput.actions;

export const addTaskInputReducer: Reducer<Task> = AddTaskInput.reducer;