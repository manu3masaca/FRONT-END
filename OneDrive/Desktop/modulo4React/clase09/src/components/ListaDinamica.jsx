import { useState } from "react";

function ListaDinamica() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h2>Lista Dinámica</h2>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />

      <button onClick={agregarTarea}>
        Agregar tarea
      </button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamica;