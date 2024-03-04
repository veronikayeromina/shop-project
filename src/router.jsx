import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { ROUTES } from "./constans/routes";
import Product from "./pages/Product";
import { CartPage } from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.product,
        element: <Product />,
      },
      {
        path: ROUTES.cart,
        element: <CartPage />,
      },
      {
        path: ROUTES.login,
        element: <Login />,
      },
      {
        path: ROUTES.signup,
        element: <SignUp />,
      },
    ],
  },
]);
