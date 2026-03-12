import styles from "./ItemList.module.css";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${styles[item.tipo]}`}
        >
          {item.nombre}
        </div>
      ))}
    </div>
  );
}

export default ItemList;