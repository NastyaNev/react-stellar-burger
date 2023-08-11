import { combineReducers } from 'redux';
import { orderReducer } from  './order';
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    orderReducer,
    userReducer
}) 