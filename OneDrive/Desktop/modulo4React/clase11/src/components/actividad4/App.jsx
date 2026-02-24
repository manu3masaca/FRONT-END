import { useState } from "react";
import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

function App() {
  const [respuesta, setRespuesta] = useState("");

  return (
    <div className="container">
      <h1>Encuesta Interactiva</h1>
      <Pregunta setRespuesta={setRespuesta} />
      <Resultado respuesta={respuesta} />
    </div>
  );
}

export default App;