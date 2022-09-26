import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchQuote } from "../store/actions/quotes";

export default function Hero_section() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchQuote = e => {
    e.preventDefault();
    dispatch(searchQuote(query));
  };

  return (
    <div className="hero_section">
      <div className="_hero">
        <h1>Chuck Jokes</h1>
        <p>Daily Jokes for you and yours</p>
      </div>

      <form className="search" onSubmit={handleSearchQuote}>
        <input
          type="text"
          placeholder="Search our quote library"
          onChange={({ target }) => setQuery(target.value)}
        />
        <button className="search_btn"></button>
      </form>
    </div>
  );
}
