import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIngredient } from "../../utils/types/types";

type TIngredientsSlice = {
    apiRequest: boolean,
    apiFailed: boolean,
    array: TIngredient[],
}

export const initialState: TIngredientsSlice = {
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
        getIngredsSuccess: (state, action: PayloadAction<TIngredient[]>) => {
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