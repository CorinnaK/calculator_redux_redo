import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createStore } from "redux";
import calcResult from "./Reducers/Calculate";
import { Provider } from "react-redux";

const store = createStore(calcResult);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
