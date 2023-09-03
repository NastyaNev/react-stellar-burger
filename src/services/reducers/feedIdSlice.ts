import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOrder } from "../../utils/types/types";

type TFeedIdSlice = {
    feedOrder: TOrder | null;
}

export const initialState: TFeedIdSlice = {
    feedOrder: null
}

export const feedIdSlice = createSlice({
    name: 'feedOrder',
    initialState,
    reducers: {
        getFeedOrder: (state, action: PayloadAction<TOrder>) => {
            state.feedOrder = action.payload
        },
        delFeedOrder: (state) => {
            state.feedOrder = null
        }
    }
})

export const { getFeedOrder, delFeedOrder } = feedIdSlice.actions;
export default feedIdSlice.reducer;