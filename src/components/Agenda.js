import React, { useState } from "react";
import "../css/Agenda.css";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(""); // Guarda a data selecionada
  const [selectedTime, setSelectedTime] = useState(""); // Guarda o horário selecionado

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reserva efetuada!\nData: ${selectedDate}\nHora: ${selectedTime}\nPor favor, verifique o contacto enviado.`
    );
  };

  return (
    <div className="agenda-container">
      {/* Coluna Esquerda */}
      <div className="left-column">
        <h2>Escolha uma Data</h2>
        <input
          type="date"
          className="calendar"
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <h3>Escolha um Horário</h3>
        <select
          className="time-select"
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Selecione um horário</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="16:00">17:00</option>
          <option value="16:00">18:00</option>
        </select>
      </div>

      {/* Coluna Direita */}
      <div className="right-column">
        <h2>Preencha os Dados</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" placeholder="Insira o seu nome" required />
          </div>
          <div className="form-group">
            <label>Morada:</label>
            <input type="text" placeholder="Insira a sua morada" required />
          </div>
          <div className="form-group">
            <label>Contacto:</label>
            <input type="tel" placeholder="Insira o seu contacto" required />
          </div>
          <button type="submit" className="submit-button">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};

export default Agenda;
