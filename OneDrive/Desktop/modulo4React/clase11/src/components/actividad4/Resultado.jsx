function Resultado({ respuesta }) {
  return (
    <div>
      {respuesta && <h2>Elegiste: {respuesta}</h2>}
    </div>
  );
}

export default Resultado;