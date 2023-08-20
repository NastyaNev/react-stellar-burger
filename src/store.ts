import { configureStore } from "@reduxjs/toolkit";
import ingredReducer from './services/reducers/ingredientSlice';
import ingredsReducer from './services/reducers/ingredientsSlice';
import constReducer from './services/reducers/constructorSlice';
import userReducer from './services/reducers/userSlice';
import orderReducer from './services/reducers/orderSlice';

export const store = configureStore({
  reducer: {
    ingredient: ingredReducer,
    ingredients: ingredsReducer,
    constructorBurger: constReducer,
    user: userReducer,
    order: orderReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;