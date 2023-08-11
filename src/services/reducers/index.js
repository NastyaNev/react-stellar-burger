import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from  './constructor';
import { ingredReducer } from  './ingredient';
import { orderReducer } from  './order';
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    ingredReducer,
    orderReducer,
    userReducer
}) 