import { useState } from "react";
import styles from "./Producto.module.css";

function Producto({ nombre, precio, disponible }) {
  const [agregado, setAgregado] = useState(false);

  return (
    <div className={styles.card}>
      <h3>{nombre}</h3>
      <p>${precio}</p>

      {!disponible && (
        <p className={styles.noDisponible}>
          No disponible
        </p>
      )}

      {disponible && (
        <button
          className={agregado ? styles.agregado : ""}
          onClick={() => setAgregado(true)}
        >
          {agregado ? "Producto en el carrito" : "Agregar al carrito"}
        </button>
      )}
    </div>
  );
}

export default Producto;