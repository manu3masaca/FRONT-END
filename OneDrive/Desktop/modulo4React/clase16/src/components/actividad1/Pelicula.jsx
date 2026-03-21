import styles from "./Pelicula.module.css";

function Pelicula({ titulo, anio, genero }) {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <p>Año: {anio}</p>
      <p>Género: {genero}</p>
    </div>
  );
}

export default Pelicula;