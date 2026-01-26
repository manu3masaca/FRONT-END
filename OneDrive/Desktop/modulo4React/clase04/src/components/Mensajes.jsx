// ==============================
// Componente Mensajes
// Renderiza solo si hay mensajes
// ==============================
function Mensajes({ hayMensajes }) {
  return (
    <>
      {hayMensajes && <p>Tienes nuevos mensajes</p>}
    </>
  );
}

export default Mensajes;
