import { useState } from "react";

function Formulario() {
  // Estados para nombre y apellido
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div>
      <h2>Formulario</h2>

      {/* Input nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      {/* Input apellido */}
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      {/* Mostrar en pantalla */}
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
    </div>
  );
}

export default Formulario;