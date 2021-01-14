import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { hot } from "react-hot-loader/root";

import App from "./App";
// import * as serviceWorker from './serviceWorker';

// hot(ReactDOM.render(<App />, document.getElementById("root")));

const render = (Component: () => JSX.Element) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
