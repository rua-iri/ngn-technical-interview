import { createSlice } from '@reduxjs/toolkit'

const initialState = []


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
    },
    setStudents: (state, action) => {
      payloadLoop: for (let i = 0; i < action.payload.length; i++) {
        stateLoop: for(let j=0; j<state.length; j++) {
          // skip iteration if item's id is duplicated
          if(state[j].id==action.payload[i].id) {
            continue payloadLoop;
          }
        }
        state.push(action.payload[i])
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { resetStudents, moveStudents, setStudents } = studentSlice.actions

export default studentSlice.reducer