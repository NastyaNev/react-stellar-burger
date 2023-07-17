import { array } from "prop-types"
import { DELETE_CONST_ITEM, GET_MOOVED_ITEMS } from "../actions/constructor"

const initialState = {
    mooved: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOOVED_ITEMS: {
            return {
                ...state, mooved: [...state.mooved, action.ingredient]
            };
        }
        case DELETE_CONST_ITEM: {
            return { ...state, mooved: state.mooved.filter(item => item._id !== action._id) };
        }
        default: {
            return state
        }
    }
}