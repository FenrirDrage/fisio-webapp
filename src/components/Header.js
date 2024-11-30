import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <div className="menu">
        <button className="button">
          <a href="#landing">Home</a>
        </button>
        <button className="button">
          <a href="#quando-fazer">Quando Fazer</a>
        </button>
        <button className="button">
          <a href="#agenda">Agenda</a>
        </button>
        <button className="button">
          <a href="#sobre">Sobre</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
