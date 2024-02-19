import React from "react";
import { TfiViewListAlt } from "react-icons/tfi";
import clsx from "clsx";

function Categories({ categories, selectedСategories, setSelectedCategories }) {
  return (
    <div className="shop_categories">
      <div className="shop_categories_container">
        <div className="categories_header">
          <TfiViewListAlt className="categories_icon" />
          <h4 className="categories_title">Categories: </h4>
        </div>
        <ul className="categories_list">
          {categories.map((category) => (
            <li key={category.id} className="categories_name">
              <button
                onClick={() => setSelectedCategories(category.id)}
                className={clsx(
                  "categories_button",
                  selectedСategories === category.id && "active"
                )}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
