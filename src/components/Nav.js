import React, { useState } from "react";

const Nav = () => {
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
            <input type="text" id="research" placeholder="Rechercher sur NACA" />
            <label htmlFor="minPrice" id="minPrice">
              Prix minumum :
            </label>
            <input type="number" htmlFor="minPrice" id="minPrice" />
            <label htmlFor="maxPrice" id="maxPrice">
              Maximum :
            </label>
            <input type="number" htmlFor="maxPrice" id="maxPrice" />
            <select id="category" htmlFor="category">
              <option value="">Catégorie</option>
              <option value="Reptiles">Reptiles</option>
              <option value="Mammal">Mammifères</option>
              <option value="Birds">Oiseaux</option>
              <option value="Arthropods">Arthropodes</option>
              <option value="Other">Autre</option>
            </select>
            <button>
              <img src="./loupe.svg" alt="Logo loupe" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Nav;
