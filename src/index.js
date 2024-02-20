import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider from "./providers/CartProvider";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
