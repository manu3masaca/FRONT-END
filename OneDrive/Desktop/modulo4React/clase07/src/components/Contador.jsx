// Importamos useState para manejar estado
import { useState } from "react";

function Contador() {
  // Creamos el estado contador inicializado en 0
  const [contador, setContador] = useState(0);

  // Función para aumentar
  const aumentar = () => {
    setContador(contador + 1);
  };

  // Función para disminuir
  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>{contador}</p>

      {/* Botones */}
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
    </div>
  );
}

export default Contador;