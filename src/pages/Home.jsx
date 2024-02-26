import "../App.css";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Card from "../Card";
import Categories from "../Categories";
import { useGetProducts } from "../hooksQuery/useGetProducts";
import { useGetCategories } from "../hooksQuery/useGetCategories.js";

function Home() {
  const [selectedСategories, setSelectedCategories] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { isPending: isPendingProducts, data: products } = useGetProducts(
    selectedСategories,
    searchValue
  );

  const {
    isPending: isPendingCategories,
    data: categories = [{ id: null, name: "all" }],
  } = useGetCategories();

  return (
    <>
      <div className="shop_box">
        <div className="shop_search">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="cards_input"
          />
        </div>

        <button className="cards_button">
          <CiSearch className="input_icon" />
        </button>
      </div>

      <div className="shop_container">
        <div className="shop_cards">
          {isPendingProducts ? (
            <h2>Loading...</h2>
          ) : (
            products?.map((obj, index) => <Card key={index} {...obj} />)
          )}
        </div>
        <div className="shop_categories">
          {isPendingCategories ? (
            <h2>Loading categories...</h2>
          ) : (
            <Categories
              categories={categories}
              selectedСategories={selectedСategories}
              setSelectedCategories={setSelectedCategories}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
