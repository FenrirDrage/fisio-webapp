import React from "react";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import myImage from "../assets/rqfisio1.png"; // Substitui pelo nome da tua imagem
import "../css/LandingPage.css"; // Importa o CSS

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="content">
        {/* Imagem Central */}
        <img src={myImage} alt="Fisioterapia" className="image" />

        {/* Título e Descrição */}
        <h1 className="title">O que é Fisioterapia?</h1>
        <p className="description">
          A fisioterapia ajuda na recuperação de lesões, reabilitação
          pós-operatória e melhora do bem-estar físico.
        </p>

        {/* Botão para Agenda */}
        {/* Botão para Agenda */}
        <button className="button">
          <Link to="/agenda" className="link">
            Consulte a Agenda
          </Link>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
