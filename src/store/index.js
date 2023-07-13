import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "./reducers/modalsReducer";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { arrayMiddleware } from "./middlewares/arrayMiddleware";
import { arrayReducer } from "./reducers/arrayReducer";

export const store = createStore(modalsReducer);
// export const state = createStore(arrayReducer, composeWithDevTools(applyMiddleware(arrayMiddleware())));