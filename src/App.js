import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Importa o Header
import LandingPage from "./components/LandingPage";
import Agenda from "./components/Agenda";
import Sobre from "./components/Sobre"; // Importa a página Sobre

function App() {
  return (
    <Router>
      {/* O Header será mostrado em todas as páginas */}
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
