import { useState } from "react";
import BotonSumar from "./BotonSumar";
import BotonRestar from "./BotonRestar";
import MostrarContador from "./MostrarContador";

function PadreContador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Actividad 2 - Contador Compartido</h2>
      <MostrarContador contador={contador} />
      <BotonSumar setContador={setContador} />
      <BotonRestar setContador={setContador} />
    </div>
  );
}

export default PadreContador;