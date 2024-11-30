import React from "react";
import ReactDOM from "react-dom/client"; // Importa 'react-dom/client'
import "./index.css"; // Este é opcional, dependendo se tens o CSS
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Cria o root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
