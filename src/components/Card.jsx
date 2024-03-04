import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../constans/routes";
import { useCart } from "../providers/CartProvider";
import CartControl from "./CartControl";

const maxLengthDescription = 34;

function Card({ ...props }) {
  const { cart, addProduct } = useCart();

  const { title, price, description, images, name, id } = props;

  const isFindCard = cart?.some((card) => card.id === id);

  return (
    <div className="shop_card">
      <div className="card_product">
        <img src={images?.[0]} alt="card" className="card_image" />
      </div>

      <div className="card_text">
        <h4 className="card_title">{title}</h4>
        <div className="card_block">
          <p className="card_description">
            {description.slice(0, maxLengthDescription)}...
          </p>
          <Link
            to={generatePath(ROUTES.product, { id })}
            className="card_button"
          >
            Read More
          </Link>
          <h5 className="card_info">{name}</h5>
        </div>

        <div className="card_box">
          <div className="card_box__text">
            <div className="card_count">Price</div>
            <div className="card_price">$ {price}</div>
          </div>
          {isFindCard ? (
            <CartControl id={id} />
          ) : (
            <button className="card_btn" onClick={() => addProduct(props)}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
