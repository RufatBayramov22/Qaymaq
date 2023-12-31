import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Router
import { BrowserRouter } from "react-router-dom";
//style
import "./assets/scss/index.scss";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
