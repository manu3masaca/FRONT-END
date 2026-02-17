import { useState } from "react";

function ContadorBasico() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador Básico</h2>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorBasico;