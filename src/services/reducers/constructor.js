import { array } from "prop-types"
import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS, GET_ORDER_NUM, GET_ORDER_NUM_FAILED, GET_ORDER_NUM_SUCCESS } from "../actions/constructor"

const initialState = {
    mooved: [],
    answer: ''
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOOVED_ITEMS: {
            return {
                ...state, mooved: [...state.mooved, action.ingredient]
            };
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