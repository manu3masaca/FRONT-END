function BotonRestar({ setContador }) {
  return (
    <button onClick={() => setContador((c) => c - 1)}>
      Restar
    </button>
  );
}

export default BotonRestar;