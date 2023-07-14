import { combineReducers } from 'redux';
import { arrayReducer } from './ingredients';
import { modalsReducer } from './modals';

export const rootReducer = combineReducers({
    arrayReducer,
    modalsReducer
}) 