import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../Gallery";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Product() {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  useEffect(() => {
    setIsLoadingProduct(true);

    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => alert("Error..."))
      .finally(() => setIsLoadingProduct(false));
  }, [id]);

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  if (!isLoadingProduct && !product) {
    return <div>No product with current id...</div>;
  }

  return (
    <div className="product_card">
      <div className="product_button">
        <MdOutlineKeyboardArrowLeft className="product_icon" />
        <button onClick={() => navigate(-1)} className="product_button_back">
          Back
        </button>
      </div>

      <div className="product_block">
        <div className="product_images">
          <Gallery images={product.images} />
        </div>
        <div className="product_content">
          <h3 className="product_title">{product?.title}</h3>
          <div className="product_category_block">
            <div className="product_category">{product?.category?.name}</div>
          </div>

          <p className="product_description">{product?.description}</p>

          <div className="product_box">
            <div className="product_box__text">
              <p className="product_count">Price</p>
              <div className="product_price">$ {product?.price}</div>
            </div>
            <button className="product_btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
