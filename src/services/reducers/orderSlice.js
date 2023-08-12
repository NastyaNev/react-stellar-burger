import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiRequest: false,
    apiFailed: false,
    answer: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrderNum: (state) => {
            state.apiRequest = true;
        },
        getOrderNumSuccess: (state, action) => {
            state.answer = action.payload;
            state.apiRequest = false;
        },
        getOrderNumFailed: (state) => {
            state.apiRequest = false;
            state.apiFailed = true
        }
    }
})

export const {getOrderNum, getOrderNumSuccess, getOrderNumFailed} = orderSlice.actions;
export default orderSlice.reducer;