import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useCart } from "./providers/CartProvider";
import { TiMinus } from "react-icons/ti";

function CartControl({ id }) {
  const { cart, decrease, increase, deleteProduct } = useCart();

  const findInCartId = cart.find((item) => item.id === id);

  return (
    <div className="cart_control">
      <button onClick={() => increase(id)} className="cart_control_button">
        <FaPlus className="cart_control_icon" />
      </button>
      <span className="cart_control_number">{findInCartId.count}</span>
      {findInCartId.count > 1 ? (
        <button onClick={() => decrease(id)} className="cart_control_minus">
          <TiMinus />
        </button>
      ) : (
        <button onClick={() => deleteProduct(id)} className="cart_control_btn">
          <MdDelete className="cart_control_icon" />
        </button>
      )}
    </div>
  );
}

export default CartControl;
