function Tarea({ tarea, onEliminar }) {
  return (
    <li>
      {tarea.texto}
      <button onClick={() => onEliminar(tarea.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Tarea;