import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ing: ''
}

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        getIngred: (state, action) => {
            state.ing = action.payload
        },
        delIngred: (state) => {
            state.ing = ''
        }
    }
})

export const  {getIngred, delIngred} = ingredientSlice.actions;
export default ingredientSlice.reducer;