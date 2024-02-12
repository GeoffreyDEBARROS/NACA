import React, { useState, useContext } from "react";
import { ResearchContext } from "../context/ResearchContext";

const Nav = () => {
  const { research, setResearch } = useContext(ResearchContext);

  const handleForm = (e) => {
    e.preventDefault();
    const newResearch = {
      keyword: research.keyword,
      minPrice: research.minPrice,
      maxPrice: research.maxPrice,
      category: research.category,
    };
    console.log(research.keyword);
    localStorage.setItem("research", JSON.stringify(newResearch));
    setResearch(newResearch);
  };

  const [isResearchVisible, setResearchVisible] = useState(false);
  const toggleResearchVisibility = () => {
    setResearchVisible(!isResearchVisible);
  };

  return (
    <nav>
      <div className="title">
        <div className="logo-container">
          <img src="./nacalogo.png" alt="Logo NACA" height="100px" />
        </div>
        <h1>
          <span>NAC</span>A
        </h1>
      </div>
      <div className="menu">
        <ul>
          <li onClick={toggleResearchVisibility}>Recherche</li>
          <li>Accueil</li>
          <li>Connexion</li>
        </ul>
      </div>
      {isResearchVisible && (
        <div className="research">
          <form>
            <input
              type="text"
              id="research"
              placeholder="Rechercher sur NACA"
              onChange={(e) =>
                setResearch({ ...research, keyword: e.target.value })
              }
              value={research.keyword}
            />
            <label htmlFor="minPrice" id="minPrice">
              Prix minumum :
            </label>
            <input
              type="number"
              htmlFor="minPrice"
              id="minPrice"
              onChange={(e) =>
                setResearch({ ...research, minPrice: e.target.value })
              }
              value={research.minPrice}
            />
            <label htmlFor="maxPrice" id="maxPrice">
              Maximum :
            </label>
            <input
              type="number"
              htmlFor="maxPrice"
              id="maxPrice"
              onChange={(e) =>
                setResearch({ ...research, maxPrice: e.target.value })
              }
              value={research.maxPrice}
            />
            <select
              id="category"
              htmlFor="category"
              onChange={(e) =>
                setResearch({ ...research, category: e.target.value })
              }
              value={research.category}
            >
              <option value="">Catégorie</option>
              <option value="Reptiles">Reptiles</option>
              <option value="Mammal">Mammifères</option>
              <option value="Birds">Oiseaux</option>
              <option value="Arthropods">Arthropodes</option>
              <option value="Other">Autre</option>
            </select>
            <button onClick={handleForm}>
              <img src="./loupe.svg" alt="Logo loupe" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Nav;
