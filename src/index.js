import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/normalize.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider from "./providers/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
