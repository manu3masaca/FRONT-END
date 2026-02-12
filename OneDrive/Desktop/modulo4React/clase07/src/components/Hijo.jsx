function Hijo({ ejecutarFuncion }) {
  return (
    <div>
      <h3>Componente Hijo</h3>

      {/* Ejecuta la función que viene del padre */}
      <button onClick={ejecutarFuncion}>
        Ejecutar función del Padre
      </button>
    </div>
  );
}

export default Hijo;