import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tuser } from "../../utils/types/types";

type TUserSlice = {
    user: Tuser | null,
    isAuthChecked: boolean
}

const initialState: TUserSlice = {
    user: null,
    isAuthChecked: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setVisitor: (state, action: PayloadAction<Tuser | null>) => {
            state.user = action.payload
        },
        setAuthChecked: (state, action: PayloadAction<boolean>) => {
            state.isAuthChecked = action.payload
        }
    }
})

export const  {setVisitor, setAuthChecked} = userSlice.actions;
export default userSlice.reducer;