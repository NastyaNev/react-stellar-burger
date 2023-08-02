import { GET_ARRAY, GET_ARRAY_FAILED, GET_ARRAY_SUCCESS } from "../actions/ingredients"

const initialState = {
    apiRequest: false,
    apiFailed: false,
    array: []
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARRAY: {
            return { ...state, apiRequest: true }
        }
        case GET_ARRAY_SUCCESS: {
            return { ...state, array: action.array, apiRequest: false }
        }
        case GET_ARRAY_FAILED: {
            return { ...state, apiRequest: false, apiFailed: true }
        }
        default: {
            return state
        }
    }
}