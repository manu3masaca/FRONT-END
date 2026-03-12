function Tarjeta() {

  const contenedor = {
    border: "2px solid black",
    padding: "20px",
    backgroundColor: "#e0e0e0",
    margin: "20px",
    borderRadius: "10px"
  };

  const titulo = {
    color: "blue",
    fontSize: "24px"
  };

  const parrafo = {
    color: "gray"
  };

  return (
    <div style={contenedor}>
      <h2 style={titulo}>Tarjeta de ejemplo</h2>
      <p style={parrafo}>
        Este componente usa estilos en línea con objetos de JavaScript.
      </p>
    </div>
  );
}

export default Tarjeta;