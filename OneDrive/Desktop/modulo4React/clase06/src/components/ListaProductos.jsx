function ListaProductos() {
  const productos = [
    { nombre: "Cuaderno", precio: 80 },
    { nombre: "Mochila", precio: 150 },
    { nombre: "Lapicera", precio: 40 },
  ];

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
            {producto.precio < 100 && (
              <span> 👉 Producto en oferta</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;