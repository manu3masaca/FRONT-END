import Producto from "./Producto";

function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25, disponible: true },
    { id: 3, nombre: "Teclado", precio: 50, disponible: false },
    { id: 4, nombre: "Monitor", precio: 300, disponible: true }
  ];

  return (
    <div>
      <h2>Productos</h2>
      {productos.map((prod) => (
        <Producto
          key={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
          disponible={prod.disponible}
        />
      ))}
    </div>
  );
}

export default ListaProductos;