import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthChecked: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setVisitor: (state, action) => {
            state.user = action.payload
        },
        setAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload
        }
    }
})

export const  {setVisitor, setAuthChecked} = userSlice.actions;
export default userSlice.reducer;