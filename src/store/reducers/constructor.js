import { array } from "prop-types"
import { GET_MOOVED_ITEMS } from "../actions/constructor"

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
        default: {
            return state
        }
    }
}