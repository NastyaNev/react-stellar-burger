import { combineReducers } from 'redux';
import { arrayReducer } from './ingredients';
import { modalsReducer } from './modalsReducer';

export const rootReducer = combineReducers({
    arrayReducer,
    modalsReducer
}) 