function InputDos({ texto, setTexto }) {
  return (
    <input
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Input 2"
    />
  );
}

export default InputDos;