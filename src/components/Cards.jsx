import React from "react";
import img from "../../public/assets/icons/orange-light@3x.png";

export default function Card({ quote }) {
  return (
    <div className="card_layout">
      <div>
        <div className="card_header">
          <img src={img} alt="" />
          <h2>
            {quote?.categories.length ? quote?.categories[0] : "Uncategorized"}
          </h2>
        </div>
        <div className="quote_value">"{quote?.value}"</div>
      </div>
    </div>
  );
}
