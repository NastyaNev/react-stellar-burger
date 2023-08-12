import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import ingredReducer from './services/reducers/ingredientSlice';
import ingredsReducer from './services/reducers/ingredientsSlice';
import constReducer from './services/reducers/constructorSlice';
import userReducer from './services/reducers/userSlice';
import orderReducer from './services/reducers/orderSlice';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    ingredient: ingredReducer,
    ingredients: ingredsReducer,
    constructorBurger: constReducer,
    user: userReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
