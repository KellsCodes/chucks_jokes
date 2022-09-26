import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero_section from "../../components/Heroes_Section.jsx";
import Navbar from "../../components/Navbar.jsx";
import { getAllCategories } from "../../store/actions/categories.js";
import { getQuote } from "../../store/actions/quotes.js";

export default function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { query } = useSelector((state) => state.query);
  console.log(query)
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");
  const [randomQuoteTrigger, setRandomQuoteTrigger] = useState(false);

  const handleSelectCategory = (name) => {
    setCategory(name);
    // only run when a user clicks on next joke
    category && setRandomQuoteTrigger((prev) => !prev);
  };

  useEffect(() => {
    // fetch random quote from a category, only run when category is selected
    category && dispatch(getQuote(category, setQuote));
    category && console.log("howw");
    // fetch joke categories on component mount, only fetch when the quote field is empty
    !category && dispatch(getAllCategories());
    // clean up function for memory leakage
    return () => {};
  }, [category, randomQuoteTrigger]);

  // generate categories btn
  const categoryBtn =
    Array.isArray(categories) &&
    categories.map((name) => (
      <button
        onClick={() => handleSelectCategory(name)}
        key={name}
        className={`cat_btn cat_btn_${Math.floor(Math.random() * 10)}`}
      >
        {name}
      </button>
    ));
  return (
    <div>
      <Navbar />
      <Hero_section />
      <div className="category_section">
        <div className="category_select_section">{categoryBtn}</div>
      </div>
      {/* The current api does not support card layout */}
      {quote && (
        <div className="category_quote_section">
          <div className="joke_category_display">
            {quote && quote?.categories.length ? quote.categories[0] : "Random"}
          </div>
          <div>
            <p>{quote["value"]}</p>
            <button
              className="btn"
              onClick={() => handleSelectCategory(category)}
            >
              Next joke
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
