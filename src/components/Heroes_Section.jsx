import React from "react";

export default function Hero_section() {
  return (
    <div className="hero_section">
      <div className="_hero">
        <h1>Chuck Jokes</h1>
        <p>Daily Quotes for you and yours</p>
      </div>

      <div className="search">
        <input type="text" placeholder="Search our quote library" />
        <button className="search_btn"></button>
      </div>
    </div>
  );
}
