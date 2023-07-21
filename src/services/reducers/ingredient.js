import { DEL_INGRED_INFO, GET_INGRED_INFO } from "../actions/ingredient"

const initialState = {
    ing: ''
  }
  
  export const ingredReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INGRED_INFO:
        return { ...state, ing: action.ingredient }
      case DEL_INGRED_INFO:
        return { ...state, ing: '' }
      default:
        return state
    }
  }