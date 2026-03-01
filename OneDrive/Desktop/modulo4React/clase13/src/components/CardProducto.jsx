import { useState } from "react";
import styles from "./CardProducto.module.css";
import { FaShoppingCart } from "react-icons/fa";
import productoImg from "../assets/producto-demo.jpg";

function CardProducto() {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className={styles.card}>
      <img
        src={productoImg}
        alt="Producto demo"
        className={styles.imagen}
      />

      <h3 className={styles.titulo}>Producto Demo</h3>

      <button
        onClick={toggleCart}
        className={`${styles.boton} ${
          inCart ? styles.verde : styles.azul
        }`}
      >
        <FaShoppingCart />
        {inCart ? "Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default CardProducto;