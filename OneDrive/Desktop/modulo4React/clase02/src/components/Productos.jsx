// ==============================
// Componente Productos
// Recibe un array de productos
// ==============================
function Productos({ productos }) {
  return (
    <>
      <h2>Lista de productos</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>
                {producto.precio > 100 ? "Premium" : "Standard"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Productos;
