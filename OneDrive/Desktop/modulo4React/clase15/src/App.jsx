import Tarjeta from "./components/Tarjeta/Tarjeta";
import Button from "./components/Button/Button";
import CardProducto from "./components/CardProducto/CardProducto";

import productoImg from "./assets/postresdefrutas.jpg";

function App() {
  return (
    <div className="container">

      <h1>Clase 15</h1>

      <h2>Actividad 1</h2>
      <Tarjeta />

      <h2>Actividad 2</h2>

      <Button>Botón Primary</Button>
      <Button variant="secondary">Botón Secondary</Button>
      <Button variant="danger">Botón Danger</Button>

      <h2>Actividad 3</h2>

      <CardProducto
        titulo="postres de frutas"
        imagen={productoImg}
      />

    </div>
  );
}

export default App;