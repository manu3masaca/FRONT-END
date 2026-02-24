import { useState } from "react";
import BotonSumar from "./BotonSumar";
import BotonRestar from "./BotonRestar";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <h1>Contador Global</h1>
      <h2>{contador}</h2>
      <BotonSumar setContador={setContador} />
      <BotonRestar setContador={setContador} />
    </div>
  );
}

export default App;