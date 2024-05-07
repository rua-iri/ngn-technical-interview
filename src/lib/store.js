import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./features/students/studentSlice"
import selectSlice from './features/select/selectSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      student: studentReducer,
      select: selectSlice
    },
  })
}