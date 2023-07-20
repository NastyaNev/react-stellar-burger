import { array } from "prop-types"
import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS, GET_ORDER_NUM, GET_ORDER_NUM_FAILED, GET_ORDER_NUM_SUCCESS, REORDER_INGREDS } from "../actions/constructor"

const initialState = {
    bun: null,
    mooved: [],
    answer: ''
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOOVED_ITEMS: {
            if (action.ingredient.type == 'bun') {
                return {
                    ...state, bun: action.ingredient
                };
            }
            else if (['sauce', 'main'].includes(action.ingredient.type)) {
                return {
                    ...state, mooved: [...state.mooved, action.ingredient]
                };
            }

            return state
        }
        case REORDER_INGREDS: {
            const itemIds = state.mooved.map(i => i.id);
            const itemIndex = itemIds.indexOf(action.itemId)
            const targetItemIndex = itemIds.indexOf(action.targetItemId)

            const clonedItems = [...state.mooved];
            const removedItem = clonedItems.splice(itemIndex, 1)[0];
            clonedItems.splice(targetItemIndex, 0, removedItem);

            return { ...state, mooved: clonedItems };
        }
        case DELETE_CONST_ITEM: {
            return { ...state, mooved: state.mooved.filter(item => item.id !== action.id) };
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