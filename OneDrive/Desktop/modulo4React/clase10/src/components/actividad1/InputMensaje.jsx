function InputMensaje({ mensaje, setMensaje }) {
  return (
    <input
      type="text"
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
      placeholder="Escribe un mensaje..."
    />
  );
}

export default InputMensaje;