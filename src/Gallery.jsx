import React, { useState } from "react";
import clsx from "clsx";

function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="product_images">
      <div className="product_images_box">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={clsx(
                "product_image_button",
                activeImage === index && "active"
              )}
            >
              <img src={image} alt="" className="product_image_selected" />
            </button>
          );
        })}
      </div>
      <img
        src={images[activeImage]}
        alt="main_product_image"
        className="main_product_image"
      />
    </div>
  );
}

export default Gallery;
