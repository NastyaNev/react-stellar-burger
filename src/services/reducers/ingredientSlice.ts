import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIngredient } from "../../utils/types";

type TIngredientSlice = {
    ing: TIngredient | null;
}

const initialState: TIngredientSlice = {
    ing: null
}

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        getIngred: (state, action: PayloadAction<TIngredient>) => {
            state.ing = action.payload
        },
        delIngred: (state) => {
            state.ing = null
        }
    }
})

export const  {getIngred, delIngred} = ingredientSlice.actions;
export default ingredientSlice.reducer;