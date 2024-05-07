import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
};

export const selectSlice = createSlice({
    name: "select",
    initialState,
    reducers: {
        resetSelect: () => initialState,
        setSelect: (state, action) => {
            // console.log(`payload: ${action.payload}`)
            state.value = action.payload
          },
    }
})

export const { setSelect, resetSelect} = selectSlice.actions;

export default selectSlice.reducer;
