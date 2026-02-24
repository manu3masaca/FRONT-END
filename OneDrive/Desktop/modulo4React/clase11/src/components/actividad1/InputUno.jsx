function InputUno({ texto, setTexto }) {
  return (
    <input
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Input 1"
    />
  );
}

export default InputUno;