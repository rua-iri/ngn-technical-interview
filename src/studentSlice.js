import { createSlice } from '@reduxjs/toolkit'
import { students } from './students'

const initialState = students;

export const studentSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state) => {
        state = initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { reset } = studentSlice.actions

export default studentSlice.reducer