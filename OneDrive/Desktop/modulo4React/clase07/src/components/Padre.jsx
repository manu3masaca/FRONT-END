import Hijo from "./Hijo";

function Padre() {

  // Función que se pasa al hijo
  const saludar = () => {
    alert("Hola desde el Padre 👋");
  };

  return (
    <div>
      <h2>Componente Padre</h2>

      {/* Le pasamos la función como prop */}
      <Hijo ejecutarFuncion={saludar} />
    </div>
  );
}

export default Padre;