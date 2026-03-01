function Tarjeta() {
  const contenedorStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    margin: "20px auto",
    width: "300px",
  };

  const tituloStyle = {
    color: "blue",
    fontSize: "24px",
  };

  const parrafoStyle = {
    color: "#333",
  };

  return (
    <div style={contenedorStyle}>
      <h2 style={tituloStyle}>Tarjeta de ejemplo</h2>
      <p style={parrafoStyle}>
        Esta tarjeta usa estilos en línea con la prop style.
      </p>
    </div>
  );
}

export default Tarjeta;