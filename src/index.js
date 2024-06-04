import React from "react";
import ReactDOM from "react-dom/client";
import { BurgerMenuProvider } from "./сomponents/Сontext/Contexts";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BurgerMenuProvider>
        <App />
      </BurgerMenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
