import React from 'react';
import ReactDom from "react-dom";
import App from "./app";
import { createStore } from "redux";
import { Provider } from"react-redux";
import rootReducer from "./rootReducer"
const store= createStore(rootReducer);

ReactDom.render(<App />, document.getElementById("root"));
