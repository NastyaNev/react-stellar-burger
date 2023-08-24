import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAnswer } from "../../utils/types/types";

type TOrderSlice = {
    apiRequest: boolean,
    apiFailed: boolean,
    answer: TAnswer | null
}

const initialState: TOrderSlice = {
    apiRequest: false,
    apiFailed: false,
    answer: null
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrderNum: (state) => {
            state.apiRequest = true;
        },
        getOrderNumSuccess: (state, action: PayloadAction<TAnswer | null>) => {
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