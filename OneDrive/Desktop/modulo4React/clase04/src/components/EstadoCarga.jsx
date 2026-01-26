// ==============================
// Componente EstadoCarga
// Muestra estado según loading
// ==============================
function EstadoCarga({ loading }) {
  return (
    <p>
      {loading ? "Cargando..." : "Datos listos"}
    </p>
  );
}

export default EstadoCarga;
