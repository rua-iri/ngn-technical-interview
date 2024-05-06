import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "id": 1,
    "name": "first student",
    "mark": 80,
    "isFirst": true,
  },
  {
    "id": 2,
    "name": "second student",
    "mark": 70,
    "isFirst": false,
  },
  {
    "id": 3,
    "name": "third student",
    "mark": 60,
    "isFirst": true,
  },
  {
    "id": 4,
    "name": "fourth student",
    "mark": 50,
    "isFirst": true,
  },
  {
    "id": 5,
    "name": "fifth student",
    "mark": 40,
    "isFirst": false,
  },
  {
    "id": 6,
    "name": "sixth student",
    "mark": 30,
    "isFirst": false,
  }
]



export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    resetStudents: () => initialState,
    moveStudents: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id == action.payload) {
          state[i].isFirst = !state[i].isFirst
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { resetStudents, moveStudents } = studentSlice.actions

export default studentSlice.reducer