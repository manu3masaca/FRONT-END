function BotonSumar({ setContador }) {
  return (
    <button onClick={() => setContador((c) => c + 1)}>
      Sumar
    </button>
  );
}

export default BotonSumar;