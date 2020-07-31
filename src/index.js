import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import Nav from "./Components/Nav";
import Historys from "./Components/Historys";
import { createStore } from "redux";
import updateHistory from "./Reducers/UpdateHistory";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
// import { v4 as uuid } from "uuidv4";

const store = createStore(updateHistory);

const Root = (store) => (
  <Provider store={store.store}>
    <Router>
      <Nav />
      <Route path="/" component={App} exact />
      <Route path="/historys" component={Historys} />
    </Router>
  </Provider>
);
render(<Root store={store} />, document.getElementById("root"));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
