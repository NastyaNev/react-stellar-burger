import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  isOpen: false,
  typeModal: '',
  array: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_OPEN":
      return { ...state, isOpen: true }
    case "MODAL_CLOSE":
      return { ...state, isOpen: false }
    case "CHOOSE_MODAL":
      return { ...state, typeModal: action.typeModal }
    case "GET_ARRAY":
      return { ...state, array: action.array }
    default:
      return state
  }
}

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
