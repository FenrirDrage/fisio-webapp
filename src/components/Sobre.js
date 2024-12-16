import React from "react";
import "../css/Sobre.css"; // Estilos para a página Sobre

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre Nós</h1>
      <p className="sobre-text">
        Somos uma clínica de fisioterapia dedicada ao bem-estar e à recuperação
        física dos nossos pacientes. Com profissionais qualificados e técnicas
        modernas, oferecemos serviços personalizados para atender às suas
        necessidades específicas.
      </p>
      <p className="sobre-text">
        A nossa missão é promover saúde e qualidade de vida através de um
        atendimento humanizado e eficiente.
      </p>
    </div>
  );
};

export default Sobre;
