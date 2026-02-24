import { useState } from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <Formulario agregarTarea={agregarTarea} />
      <Lista tareas={tareas} />
    </div>
  );
}

export default App;