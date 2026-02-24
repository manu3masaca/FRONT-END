function Pregunta({ setRespuesta }) {
  return (
    <div>
      <button onClick={() => setRespuesta("React")}>React</button>
      <button onClick={() => setRespuesta("Vue")}>Vue</button>
      <button onClick={() => setRespuesta("Angular")}>Angular</button>
    </div>
  );
}

export default Pregunta;