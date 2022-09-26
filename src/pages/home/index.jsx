import React from "react";
import Hero_section from "../../components/Heroes_Section.jsx";
import Navbar from "../../components/Navbar.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero_section />
      <div className="category_section">
        <div className="category_select_section">
          <button className="cat_btn cat_btn_1">ANIMAL</button>
          <button className="cat_btn cat_btn_2">ANIMAL</button>
          <button className="cat_btn cat_btn_3">ANIMAL</button>
          <button className="cat_btn cat_btn_4">ANIMAL</button>
          <button className="cat_btn cat_btn_5">ANIMAL</button>
          <button className="cat_btn cat_btn_6">ANIMAL</button>
          <button className="cat_btn cat_btn_7">ANIMAL</button>
          <button className="cat_btn cat_btn_8">ANIMAL</button>
          {/* <button className="cat_btn cat_btn_0">
            <span>VIEW ALL</span>
            <span className="btn_arrow_down"></span>
          </button> */}
        </div>
      </div>
      {/* The current api does not support card layout */}
      <div className="category_quote_section">
        <div className="joke_category_display">CELEBRITY</div>
        <div>
          <p>
            The job of the superhero is to save the day. The job of Chuck Norris
            is to save the superhero.
          </p>
          <button className="btn">Next joke</button>
        </div>
      </div>
      {/* <div className="category_card_section">
        <div className="card_layout">
          <div>
            <h2>D</h2>
          </div>
        </div>
        <div className="card_layout"></div>
        <div className="card_layout"></div>
        <div className="card_layout"></div>
        <div className="card_layout"></div>
        <div className="card_layout"></div>
      </div> */}
    </div>
  );
}
