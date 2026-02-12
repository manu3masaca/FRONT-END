// Importamos useState para manejar estado
import { useState } from "react";

function InputControlado() {

  // Creamos estado texto inicializado vacío
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2>Input Controlado</h2>

      {/* 
        value depende del estado texto
        onChange actualiza el estado cada vez que se escribe
      */}
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
      />

      {/* Mostramos lo que la usuaria escribe en tiempo real */}
      <p>Estás escribiendo: {texto}</p>
    </div>
  );
}

export default InputControlado;