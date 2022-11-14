import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Upper from "./components/Upper.js";
import Gear from "./components/Gear.js";
import Lower from "./components/Lower.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Upper />
    <Gear />
    <Lower />
  </React.StrictMode>
);

reportWebVitals();
