import { useState } from "react";

function CambiarColor() {
  // Estado booleano
  const [esRojo, setEsRojo] = useState(false);

  // Función para cambiar estado
  const cambiarColor = () => {
    setEsRojo(!esRojo);
  };

  return (
    <div>
      <h2 style={{ color: esRojo ? "red" : "black" }}>
        Texto que cambia de color
      </h2>

      <button onClick={cambiarColor}>
        Cambiar Color
      </button>
    </div>
  );
}

export default CambiarColor;