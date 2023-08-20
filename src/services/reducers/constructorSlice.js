import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bun: null,
    mooved: []
}

export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        getMoovedItems: (state, action) => {
            if (action.payload.type == 'bun') {
                state.bun = action.payload;
            }
            else if (['sauce', 'main'].includes(action.payload.type)) {
                state.mooved = [...state.mooved, action.payload];
            }
        },
        sortIngreds: (state, action) => {
            const itemIds = state.mooved.map(i => i.id);
            const itemIndex = itemIds.indexOf(action.payload.itemId);
            const targetItemIndex = itemIds.indexOf(action.payload.targetItemId);

            const clonedItems = state.mooved;
            const removedItem = clonedItems.splice(itemIndex, 1)[0];
            clonedItems.splice(targetItemIndex, 0, removedItem);

            state.mooved = clonedItems;
        },
        delConstItem: (state, action) => {
            state.mooved = state.mooved.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { getMoovedItems, sortIngreds, delConstItem } = constructorSlice.actions;
export default constructorSlice.reducer;