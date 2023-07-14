import { CHOOSE_MODAL, MODAL_CLOSE, MODAL_OPEN } from "../actions/modals"

const initialState = {
    isOpen: false,
    typeModal: '',
  }
  
  export const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
      case MODAL_OPEN:
        return { ...state, isOpen: true }
      case MODAL_CLOSE:
        return { ...state, isOpen: false }
      case CHOOSE_MODAL:
        return { ...state, typeModal: action.typeModal }
      default:
        return state
    }
  }