import { GET_ORDER_NUM, GET_ORDER_NUM_FAILED, GET_ORDER_NUM_SUCCESS } from "../actions/order"

const initialState = {
    answer: ''
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
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