import { useState } from "react";
import InputMensaje from "./InputMensaje";
import MostrarMensaje from "./MostrarMensaje";

function Padre() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <h2>Actividad 1 - Mensaje Compartido</h2>
      <InputMensaje mensaje={mensaje} setMensaje={setMensaje} />
      <MostrarMensaje mensaje={mensaje} />
    </div>
  );
}

export default Padre;