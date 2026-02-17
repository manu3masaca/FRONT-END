import Tarea from "./Tarea";

function ListaTareas({ tareas, onEliminar }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;