import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CardProducto.module.css";

function CardProducto({ titulo, imagen }) {

  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.imagen} />
      <h3>{titulo}</h3>

      <button
        onClick={toggleCart}
        className={`${styles.boton} ${
          inCart ? styles.agregado : styles.noAgregado
        }`}
      >
        <FaShoppingCart />
        {inCart ? " Agregado" : " Agregar al carrito"}
      </button>
    </div>
  );
}

export default CardProducto;