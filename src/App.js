import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResearchProvider } from "./context/ResearchContext";
import Home from "./pages/Home.js";


function App() {
  return (
    <ResearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ResearchProvider>
  );
}

export default App;
