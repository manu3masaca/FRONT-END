import styles from "./Button.module.css";

function Button({ variant = "primary", children }) {
  const clase =
    variant === "secondary"
      ? `${styles.btn} ${styles.secondary}`
      : `${styles.btn} ${styles.primary}`;

  return <button className={clase}>{children}</button>;
}

export default Button;