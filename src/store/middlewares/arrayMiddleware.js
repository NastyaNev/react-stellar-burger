import React from "react"
import { GET_ARRAY, GET_ARRAY_FAILED, GET_ARRAY_SUCCESS } from "../actions"


export const arrayMiddleware = () => {
    return (state) => {
        return (next) => {
            return (action) => {
                state.dispatch({ type: GET_ARRAY })
                fetch('https://norma.nomoreparties.space/api/ingredients')
                .then((res) => {
                    if (res && res.success) {
                        state.dispatch({ type: GET_ARRAY_SUCCESS, array: res.data })
                    } else {state.dispatch({ type: GET_ARRAY_FAILED })}
                })
                .catch( err => {state.dispatch({type: GET_ARRAY_FAILED})
                })
                return next(action);
            }
        }
    }
}