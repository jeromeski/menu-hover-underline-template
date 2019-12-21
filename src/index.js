import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import "./styles.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
