import { useState } from "react";
import InputUno from "./InputUno";
import InputDos from "./InputDos";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div className="container">
      <h1>Sincronizar Inputs</h1>
      <InputUno texto={texto} setTexto={setTexto} />
      <InputDos texto={texto} setTexto={setTexto} />
    </div>
  );
}

export default App;