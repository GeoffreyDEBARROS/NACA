import React, { useState, useContext } from "react";
import { ResearchContext } from "../context/ResearchContext";
import { announces } from "../data/announces";

const Announces = () => {
  const [announcesList] = useState(announces);
  const { research } = useContext(ResearchContext);

  let keyword = research.keyword;
  let minPrice = research.minPrice;
  let maxPrice = research.maxPrice;
  let category = research.category;


  return (
    <div className="result-container">
      {/* {researchResult.map((item, index) => (
        <div className="card" key={index}>
          <div className="img-container">
            <img src={item.img} alt={item.title} height="100px" />
          </div>
          <div className="infos">
            <h2>{item.title}</h2>
            <span>{item.price}</span>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Announces;
