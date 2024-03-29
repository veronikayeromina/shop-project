import "../App.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { useGetProducts } from "../hooksQuery/useGetProducts";
import { useGetCategories } from "../hooksQuery/useGetCategories";
import SkeletonCard from "../components/SkeletonCard";

function Home() {
  const [selectedСategories, setSelectedCategories] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, data: products } = useGetProducts(
    selectedСategories,
    searchValue
  );

  const {
    isLoading: isLoadingCategories,
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
          {isLoading
            ? [...new Array(10)].map((index) => <SkeletonCard key={index} />)
            : products?.map((obj, index) => <Card key={index} {...obj} />)}
        </div>
        <div className="shop_categories">
          {isLoadingCategories ? (
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
