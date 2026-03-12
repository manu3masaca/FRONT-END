import styles from "./Button.module.css";

function Button({ tipo }) {
  return (
    <button className={`${styles.btn} ${styles[tipo]}`}>
      Botón
    </button>
  );
}

export default Button;