import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import './style/styles.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);