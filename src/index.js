import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App.js";
import "./index.css";
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
