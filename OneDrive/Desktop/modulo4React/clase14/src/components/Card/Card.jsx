import styles from "./Card.module.css";

function Card({ tipo, destacado, children }) {
  return (
    <div
      className={`${styles.card} ${tipo === "alert" ? styles.alert : ""} ${
        destacado ? styles.destacado : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Card;