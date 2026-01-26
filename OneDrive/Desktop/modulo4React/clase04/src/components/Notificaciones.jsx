// ==============================
// Componente Notificaciones
// Muestra mensaje solo si hay notificaciones
// ==============================
function Notificaciones({ cantidad }) {
  // Si no hay notificaciones, no renderiza nada
  if (cantidad > 0) {
    return <p>Tienes {cantidad} notificaciones</p>;
  }

  return null;
}

export default Notificaciones;
