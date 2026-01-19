// ==============================
// Imports de React
// ==============================
import { useState } from "react";

// ==============================
// Imports de componentes
// ==============================
import { Saludo } from "./components/Saludo";
import Despedida from "./components/Despedida";
import ListaTareas from "./components/ListaTareas";
import Productos from "./components/Productos";

// ==============================
// Estilos
// ==============================
import "./App.css";

// ==============================
// Componente principal App
// ==============================
function App() {
  // ==============================
  // Estado (useState)
  // ==============================
  const [count, setCount] = useState(0);

  // ==============================
  // Datos simulados
  // ==============================
  const tareas = ["Estudiar React", "Practicar JSX", "Usar Vite"];

  const productos = [
    { nombre: "Notebook", precio: 150 },
    { nombre: "Mouse", precio: 40 },
    { nombre: "Teclado", precio: 80 }
  ];

  return (
    <>
      {/* Saludo con JSX */}
      <Saludo />

      {/* Contador usando useState */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Contador: {count}
        </button>
      </div>

      {/* Lista renderizada con map() y props */}
      <ListaTareas tareas={tareas} />

      {/* Condicional con && */}
      {productos.length > 0 && <Productos productos={productos} />}

      {/* Componente export default */}
      <Despedida />
    </>
  );
}

export default App;
