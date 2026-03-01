import Tarjeta from "./components/Tarjeta";
import Button from "./components/Button";
import CardProducto from "./components/CardProducto";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Clase 13 - Estilos en React</h1>

      <h2>Actividad 1</h2>
      <Tarjeta />

      <h2>Actividad 2</h2>
      <Button>Botón Primary</Button>
      <Button variant="secondary">Botón Secondary</Button>

      <h2>Actividad 3</h2>
      <CardProducto />
    </div>
  );
}

export default App;