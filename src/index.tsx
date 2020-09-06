import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
