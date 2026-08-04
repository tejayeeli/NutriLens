import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/variables.css";

import App from "./App";
import MealProvider from "./context/MealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MealProvider>
        <App />
      </MealProvider>
    </BrowserRouter>
  </React.StrictMode>
);