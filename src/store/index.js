import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "./reducers/modalsReducer";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { arrayReducer } from "./reducers/ingredients";

// export const store = createStore(modalsReducer, composeWithDevTools());
// export const state = createStore(arrayReducer, composeWithDevTools(applyMiddleware(arrayMiddleware())));