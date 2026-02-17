import { useState } from "react";

function ContadorMultiple() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador con múltiples acciones</h2>
      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>

      <button onClick={() => setContador(0)}>
        Resetear
      </button>
    </div>
  );
}

export default ContadorMultiple;