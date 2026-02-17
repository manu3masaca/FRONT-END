import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import ListaTareas from "./ListaTareas";

function PadreTareas() {
  const [tareas, setTareas] = useState([]);

  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Actividad 3 - Lista de Tareas</h2>
      <AgregarTarea setTareas={setTareas} />
      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} />
    </div>
  );
}

export default PadreTareas;