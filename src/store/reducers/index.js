import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { modalsReducer } from './modals';
import { constructorReducer } from  './constructor'

export const rootReducer = combineReducers({
    ingredientsReducer,
    modalsReducer,
    constructorReducer
}) 