import { SET_COUNT, DELETE_MOOVED_ITEM, GET_ARRAY, GET_ARRAY_FAILED, GET_ARRAY_SUCCESS, DOWN_COUNT } from "../actions/ingredients"

const initialState = {
    apiRequest: false,
    apiFailed: false,
    array: [],
    isVisible: false
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
        case SET_COUNT: {
            return { ...state, isVisible: true };
        }
        case DOWN_COUNT: {
            return { ...state, array: state.array, ...state.array.filter(item => item._id === action._id), isVisible: false };
        }
        case DELETE_MOOVED_ITEM: {
            return { ...state, mooved: [...state.mooved].filter(item => item.id !== action.id) };
        }
        default: {
            return state
        }
    }
}