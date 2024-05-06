import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./features/students/studentSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      student: studentReducer,
    },
  })
}