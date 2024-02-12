import React, { useState, useContext } from "react";
import { ResearchContext } from "../context/ResearchContext";
import { announces } from "../data/announces";

const Announces = () => {
  const [announcesList] = useState(announces);
  const { research, showResult } = useContext(ResearchContext);

  let keyword = research.keyword;
  let minPrice = research.minPrice;
  let maxPrice = research.maxPrice;
  let category = research.category;

  const filteredAnnounces = announcesList.filter((announce) => {
    const titleMatch = announce.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const priceMatch = announce.price >= minPrice && announce.price <= maxPrice;
    const categoryMatch = announce.category === category;

    return titleMatch && priceMatch && categoryMatch;
  });

  return (
    <div className="result-container">
      {showResult &&
        filteredAnnounces.map((item, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img src={item.img} alt={item.title} height="100px" />
            </div>
            <div className="infos">
              <h2>{item.title}</h2>
              <span>{item.price} &#8364;</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Announces;
