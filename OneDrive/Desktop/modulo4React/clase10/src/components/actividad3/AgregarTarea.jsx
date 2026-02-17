import { useState } from "react";

function AgregarTarea({ setTareas }) {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;

    setTareas((prev) => [
      ...prev,
      { id: Date.now(), texto: nuevaTarea }
    ]);

    setNuevaTarea("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarTarea;