import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiRequest: false,
    apiFailed: false,
    array: []
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        getIngreds: (state) => {
            state.apiRequest = true;
        },
        getIngredsSuccess: (state, action) => {
            state.array = action.payload;
            state.apiRequest = false;
        },
        getIngredsFailed: (state) => {
            state.apiRequest = false;
            state.apiFailed = true
        }
    }
})

export const {getIngreds, getIngredsSuccess, getIngredsFailed} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;