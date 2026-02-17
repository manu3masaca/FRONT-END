import { useState } from "react";

function InputControlado() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2>Input Controlado</h2>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
      />

      <p>Estás escribiendo: {texto}</p>
    </div>
  );
}

export default InputControlado;