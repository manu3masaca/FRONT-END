import { useState } from "react";

function App() {

  // 🎨 Estado único para el fondo
  const [colorFondo, setColorFondo] = useState("#ffffff");

  // 🔵 Actividad 1 – Color aleatorio
  const generarColorAleatorio = () => {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    setColorFondo(color);
  };

  // 🌙 Actividad 2 – Modo oscuro / claro
  const [oscuro, setOscuro] = useState(false);

  const toggleModo = () => {
    if (oscuro) {
      setColorFondo("#ffffff"); // modo claro = blanco
    } else {
      setColorFondo("#000000"); // modo oscuro = negro
    }
    setOscuro(!oscuro);
  };

  // 🖼 Actividad 3 – Galería
  const imagenes = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ];

  const [indice, setIndice] = useState(0);

  const siguienteImagen = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  // 🛒 Actividad 4 – Carrito
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = () => {
    const nuevoProducto = `Producto ${carrito.length + 1}`;
    setCarrito([...carrito, nuevoProducto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: colorFondo,
        color: colorFondo === "#000000" ? "white" : "black",
      }}
    >
      <h1>Clase 12 - Estados en React</h1>

      {/* 🔵 Actividad 1 */}
      <section>
        <h2>Actividad 1 – Fondo aleatorio</h2>
        <p>Color actual: {colorFondo}</p>
        <button onClick={generarColorAleatorio}>
          Cambiar color de fondo
        </button>
      </section>

      {/* 🌙 Actividad 2 */}
      <section>
        <h2>Actividad 2 – Modo oscuro</h2>
        <button onClick={toggleModo}>
          Cambiar a modo {oscuro ? "claro (blanco)" : "oscuro (negro)"}
        </button>
      </section>

      {/* 🖼 Actividad 3 */}
      <section>
        <h2>Actividad 3 – Galería</h2>
        <img src={imagenes[indice]} alt="Galería" />
        <br />
        <button onClick={siguienteImagen}>Siguiente</button>
      </section>

      {/* 🛒 Actividad 4 */}
      <section>
        <h2>Actividad 4 – Carrito</h2>

        <button onClick={agregarProducto}>Agregar producto</button>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <ul>
              {carrito.map((producto, index) => (
                <li key={index}>{producto}</li>
              ))}
            </ul>
            <p>Total de productos: {carrito.length}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default App;