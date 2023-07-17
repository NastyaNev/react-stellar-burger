import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { modalsReducer } from './modals';
import { constructorReducer } from  './constructor';
import { ingredReducer } from  './ingredient';

export const rootReducer = combineReducers({
    ingredientsReducer,
    modalsReducer,
    constructorReducer,
    ingredReducer
}) 