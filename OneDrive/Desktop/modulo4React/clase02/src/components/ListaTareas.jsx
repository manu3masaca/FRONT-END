// ==============================
// Componente ListaTareas
// Recibe un array de tareas por props
// ==============================
function ListaTareas({ tareas }) {
  // ==============================
  // Renderizado condicional
  // ==============================
  if (tareas.length === 0) {
    return <p>No hay tareas pendientes</p>;
  }

  return (
    <>
      <h2>Lista de tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </>
  );
}

export default ListaTareas;
