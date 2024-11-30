import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import QuandoFazer from "./components/QuandoFazer";
import Agenda from "./components/Agenda";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <QuandoFazer />
      <Agenda />
      <Sobre />
    </div>
  );
}

export default App;
