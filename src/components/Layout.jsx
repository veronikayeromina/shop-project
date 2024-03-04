import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useCart } from "../providers/CartProvider";
import { ROUTES } from "../constans/routes";
import { TbDoorExit } from "react-icons/tb";
import { MdGroupAdd } from "react-icons/md";

function Layout() {
  const { cart } = useCart();

  return (
    <div className="App">
      <div className="shop_wrapper">
        <header className="shop_header">
          <Link to={ROUTES.home} className="header_title">
            React Shop
          </Link>
          <div className="header_button_group">
            <Link to={ROUTES.login} className="header_button_registration">
              <TbDoorExit />
              Login
            </Link>

            <Link
              to={ROUTES.signup}
              className="header_button_registration header_button_signup"
            >
              <MdGroupAdd />
              Sign Up
            </Link>

            <Link to={ROUTES.cart} className="header_button">
              <FaShoppingCart className="header_icon" />
              {!!cart.length && (
                <span className="header_cart_number">{cart.length}</span>
              )}
            </Link>
          </div>
        </header>

        <main className="shop_content">
          <Outlet />
        </main>
      </div>
      <footer className="shop_footer">
        <h3 className="footer_title">Made with love by Nika</h3>
      </footer>
    </div>
  );
}

export default Layout;
