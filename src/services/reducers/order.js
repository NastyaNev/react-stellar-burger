import { GET_ORDER_NUM, GET_ORDER_NUM_FAILED, GET_ORDER_NUM_SUCCESS, REORDER_INGREDS } from "../actions/order"

const initialState = {
    answer: ''
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case REORDER_INGREDS: {
            const itemIds = state.mooved.map(i => i.id);
            const itemIndex = itemIds.indexOf(action.itemId)
            const targetItemIndex = itemIds.indexOf(action.targetItemId)

            const clonedItems = [...state.mooved];
            const removedItem = clonedItems.splice(itemIndex, 1)[0];
            clonedItems.splice(targetItemIndex, 0, removedItem);

            return { ...state, mooved: clonedItems };
        }
        case GET_ORDER_NUM: {
            return { ...state, apiRequest: true }
        }
        case GET_ORDER_NUM_SUCCESS: {
            return { ...state, answer: action.answer, apiRequest: false }
        }
        case GET_ORDER_NUM_FAILED: {
            return { ...state, apiRequest: false, apiFailed: true }
        }
        default: {
            return state
        }
    }
}