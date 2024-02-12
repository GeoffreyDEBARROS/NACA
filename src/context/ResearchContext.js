import React, { useState, createContext } from "react";

export const ResearchContext = createContext();

export const ResearchProvider = ({ children }) => {
  const [research, setResearch] = useState({
    keyword: "",
    minPrice: "",
    maxPrice: "",
    category: "",
  });

  return (
    <ResearchContext.Provider value={{ research, setResearch }}>
      {children}
    </ResearchContext.Provider>
  );
};