import React, { useState, createContext } from "react";

export const ResearchContext = createContext();

export const ResearchProvider = ({ children }) => {
  const [research, setResearch] = useState({
    keyword: "",
    minPrice: "",
    maxPrice: "",
    category: "",
  });

  const [showResult, setShowResult] = useState(false);

  return (
    <ResearchContext.Provider
      value={{ research, setResearch, showResult, setShowResult }}
    >
      {children}
    </ResearchContext.Provider>
  );
};
