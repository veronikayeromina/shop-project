import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useCart } from "../providers/CartProvider";

function Layout() {
  const { cart } = useCart();

  return (
    <div className="App">
      <div className="shop_wrapper">
        <header className="shop_header">
          <Link to="/" className="header_title">
            React Shop
          </Link>
          <Link to="/cart" className="header_button">
            <FaShoppingCart className="header_icon" />
            {!!cart.length && (
              <span className="header_cart_number">{cart.length}</span>
            )}
          </Link>
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
