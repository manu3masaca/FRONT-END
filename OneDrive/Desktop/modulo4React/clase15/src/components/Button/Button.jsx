import styles from "./Button.module.css";

function Button({ variant = "primary", children }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;