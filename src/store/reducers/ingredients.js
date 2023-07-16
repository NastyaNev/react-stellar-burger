import { ADD_ITEM, ADD_MOOVED_ITEM, DELETE_ITEM, DELETE_MOOVED_ITEM, GET_ARRAY, GET_ARRAY_FAILED, GET_ARRAY_SUCCESS } from "../actions/ingredients"

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
        case DELETE_ITEM: {
            return { ...state, array: state.array.filter(item => item._id !== action._id) };

        }
        case ADD_ITEM: {
            return {
                ...state,
                array: [...state.array, ...state.postponed.filter(item => item.id === action.id)]
            };
        }
        case ADD_MOOVED_ITEM: {
            return {
                ...state,
                array: state.array.map(item =>
                    item._id === action._id ? { ...item, type: action.type } : item)
            };
        };
        case DELETE_MOOVED_ITEM: {
            return { ...state, mooved: [...state.mooved].filter(item => item.id !== action.id) };
        }
        default: {
            return state
        }
    }
}