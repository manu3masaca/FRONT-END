import { useState } from "react";

function ListaTareas() {
  // Estado para el input
  const [tarea, setTarea] = useState("");

  // Estado para la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Función para agregar tarea
  const agregarTarea = () => {
    if (tarea.trim() === "") return;

    // Agregamos nueva tarea al array
    setTareas([...tareas, tarea]);

    // Limpiamos el input
    setTarea("");
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>

      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

      <button onClick={agregarTarea}>Agregar</button>

      {/* Mostrar tareas */}
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;