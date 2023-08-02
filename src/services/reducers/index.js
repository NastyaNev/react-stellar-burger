import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from  './constructor';
import { ingredReducer } from  './ingredient';
import { orderReducer } from  './order';

export const rootReducer = combineReducers({
    ingredientsReducer,
    constructorReducer,
    ingredReducer,
    orderReducer
}) 