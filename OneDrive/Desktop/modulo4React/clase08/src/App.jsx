import InputControlado from "./components/InputControlado";
import SoloNumeros from "./components/SoloNumeros";
import InputNoControlado from "./components/InputNoControlado";

function App() {
  return (
    <div>
      <h1>Práctica de Inputs en React</h1>

      <InputControlado />
      <hr />

      <SoloNumeros />
      <hr />

      <InputNoControlado />
    </div>
  );
}

export default App;