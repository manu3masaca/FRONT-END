import ContadorBasico from "./components/ContadorBasico";
import ContadorMultiple from "./components/ContadorMultiple";
import InputControlado from "./components/InputControlado";
import ListaDinamica from "./components/ListaDinamica";

function App() {
  return (
    <div>
      <h1>Clase 9 - useState</h1>

      <ContadorBasico />
      <hr />

      <ContadorMultiple />
      <hr />

      <InputControlado />
      <hr />

      <ListaDinamica />
    </div>
  );
}

export default App;
