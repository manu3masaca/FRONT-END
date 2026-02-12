import { useState } from "react";

function SoloNumeros() {

  // Estado para mostrar mensaje de error
  const [mensaje, setMensaje] = useState("");

  // Función que se ejecuta al presionar una tecla
  const manejarTecla = (event) => {

    const tecla = event.key;

    // Permitimos números y Backspace
    if (
      (tecla >= "0" && tecla <= "9") || 
      tecla === "Backspace"
    ) {
      setMensaje(""); // Limpiamos mensaje si es válido
    } else {
      // Bloqueamos la tecla
      event.preventDefault();
      setMensaje("Solo números permitidos");
    }
  };

  return (
    <div>
      <h2>Solo Números</h2>

      <input
        type="text"
        onKeyDown={manejarTecla}
        placeholder="Escribe solo números"
      />

      {/* Mostramos mensaje si intenta escribir letras */}
      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
    </div>
  );
}

export default SoloNumeros;