import "../App.css";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import Card from "../Card";
import Categories from "../Categories";

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [categories, setCategories] = useState([{ id: null, name: "all" }]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [selectedСategories, setSelectedCategories] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  console.log({ selectedСategories });

  useEffect(() => {
    setIsLoadingCards(true);

    const category = selectedСategories
      ? `categoryId=${selectedСategories}`
      : "";

    fetch(`https://api.escuelajs.co/api/v1/products?${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCards(json);
      })
      .catch((err) => alert("Error..."))
      .finally(() => setIsLoadingCards(false));
  }, [selectedСategories]);

  useEffect(() => {
    setIsLoadingCategories(true);

    fetch(`https://api.escuelajs.co/api/v1/categories`)
      .then((res) => res.json())
      .then((json) => setCategories((prev) => [...prev, ...json]))
      .catch((err) => alert("Error..."))
      .finally(() => setIsLoadingCategories(false));
  }, []);

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
          {isLoadingCards ? (
            <h2>Loading...</h2>
          ) : (
            cards
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, index) => <Card key={index} {...obj} />)
          )}
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
