// Importamos useRef y useState
import { useRef, useState } from "react";

function InputNoControlado() {

  // Creamos el ref
  const inputRef = useRef(null);

  // Estado para mostrar el valor en pantalla
  const [valor, setValor] = useState("");

  // Función que se ejecuta al hacer clic
  const mostrarValor = () => {

    // Accedemos al valor del input usando el ref
    const textoIngresado = inputRef.current.value;

    // Mostramos el valor en pantalla
    setValor(textoIngresado);
  };

  return (
    <div>
      <h2>Input No Controlado</h2>

      {/* Asignamos el ref al input */}
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe algo..."
      />

      <button onClick={mostrarValor}>
        Mostrar valor
      </button>

      {/* Mostramos el valor después de hacer clic */}
      {valor && <p>Valor ingresado: {valor}</p>}
    </div>
  );
}

export default InputNoControlado;