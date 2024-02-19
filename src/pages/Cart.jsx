import React from "react";
import { useCart } from "../providers/CartProvider";
import CartControl from "../CartControl";
import Logo from "../images/cart-image.png";

export function CartPage() {
  const { cart } = useCart();

  const sumTotalProducts = cart.reduce(
    (acc, product) => {
      acc.count = acc.count + product.count;
      acc.totalSum = acc.totalSum + product.price * product.count;
      return acc;
    },
    { count: 0, totalSum: 0 }
  );

  if (cart.length < 1) {
    return (
      <div className="cart_empty_block">
        <img className="cart_image" src={Logo} alt="cart-empty" />
        <h4 className="cart_subtitle">You cart is empty</h4>;
        <h5 className="cart_info">Start adding items to enjoy shopping!</h5>
      </div>
    );
  }

  return (
    <div className="cart_product_container">
      <div className="cart_product_wrapper">
        <div className="cart_product_text">
          <h4 className="cart_product_header">Product</h4>
          <h4 className="cart_product_header">Price</h4>
          <h4 className="cart_product_header">Quantity</h4>
          <h4 className="cart_product_header">Subtotal</h4>
        </div>
        {cart.map((item, index) => {
          const sumProducts = item.price * item.count;

          return (
            <div key={index} className="cart_product_block">
              <h5 className="cart_product_title">{item.title}</h5>
              <h5 className="cart_product_price">$ {item.price}</h5>
              <CartControl id={item.id} />
              <div className="cart_product_sum">$ {sumProducts}</div>
            </div>
          );
        })}
      </div>

      <div className="cart_order_total">
        <div className="cart_order_price">
          Order total: ${sumTotalProducts.totalSum}
        </div>
        <div className="cart_order_value">
          Sales volume: {sumTotalProducts.count}
        </div>
        <button className="cart_order_button">Checkout</button>
      </div>
    </div>
  );
}
