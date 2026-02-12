import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import CambiarColor from "./components/CambiarColor";
import Padre from "./components/Padre";

function App() {
  return (
    <div>
      <h1>Actividades React</h1>

      <Contador />
      <Formulario />
      <ListaTareas />
      <CambiarColor />
      <Padre />
    </div>
  );
}

export default App;