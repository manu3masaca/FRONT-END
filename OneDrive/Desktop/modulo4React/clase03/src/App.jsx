import Saludo from "./components/saludo";
import Boton from "./components/boton";
import Caja from "./components/caja";
import Layout from "./components/layout";

// ==============================
// Componente App
// ==============================
function App() {
  const manejarClick = () => {
    alert("¡Botón presionado!");
  };

  return (
    <Layout
      header={<h1>Mi App en React</h1>}
      content={
        <>
          <Saludo nombre="Manuela" />
          <Saludo />

          <Boton texto="Hacer click" onClick={manejarClick} />

          <Caja>
            <h3>Título dentro de Caja</h3>
            <p>Este es un párrafo envuelto con children.</p>
          </Caja>
        </>
      }
      footer={<p>© 2026 - Footer</p>}
    />
  );
}

export default App;