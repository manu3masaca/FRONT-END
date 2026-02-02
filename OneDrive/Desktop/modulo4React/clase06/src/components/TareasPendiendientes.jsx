function TareasPendientes() {
  const tareas = [
    { id: 1, texto: "Estudiar React", completa: true },
    { id: 2, texto: "Hacer ejercicio", completa: false },
    { id: 3, texto: "Leer", completa: true },
  ];

  const tareasPendientes = tareas.filter(
    (tarea) => !tarea.completa
  );

  return (
    <div>
      <h2>Tareas pendientes</h2>

      {tareasPendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {tareasPendientes.map((tarea) => (
            <li key={tarea.id}>{tarea.texto}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TareasPendientes;