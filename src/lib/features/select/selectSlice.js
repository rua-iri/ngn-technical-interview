import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
};

export const selectSlice = createSlice({
    name: "select",
    initialState,
    reducers: {
        resetSelect: () => initialState,
        pushSelect: (state, action) => {
            console.log(action.payload)
            if (!state.value.includes(action.payload)) {
                state.value.push(action.payload)
            }
        },
        removeSelect: (state, action) => {
            // state.value.pop(action.payload)
            state.value = state.value.filter( select => select!=action.payload)
        },
    }
})

export const { resetSelect, pushSelect, removeSelect } = selectSlice.actions;

export default selectSlice.reducer;
