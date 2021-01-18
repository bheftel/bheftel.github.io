import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { hot } from "react-hot-loader/root";

import App from "./App";

const render = (Component: () => JSX.Element) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
