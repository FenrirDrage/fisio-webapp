import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom"; // Importa o Link do React Router

const Header = () => {
  return (
    <nav className="nav">
      <div className="menu">
        {/* Botões com navegação via Link */}
        <button className="button">
          <Link to="/" className="link">
            Home
          </Link>
        </button>
        <button className="button">
          <Link to="/quando-fazer" className="link">
            Quando Fazer
          </Link>
        </button>
        <button className="button">
          <Link to="/agenda" className="link">
            Agenda
          </Link>
        </button>
        <button className="button">
          <Link to="/sobre" className="link">
            Sobre
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
