import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS, GET_ORDER_NUM, GET_ORDER_NUM_FAILED, GET_ORDER_NUM_SUCCESS, REORDER_INGREDS } from "../actions/constructor"

const initialState = {
    bun: null,
    mooved: []
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
        case DELETE_CONST_ITEM: {
            return { ...state, mooved: state.mooved.filter(item => item.id !== action.id) };
        }
        default: {
            return state
        }
    }
}