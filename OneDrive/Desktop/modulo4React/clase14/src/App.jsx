import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import ItemList from "./components/ItemList/ItemList";

function App() {

  const items = [
    { nombre: "Servidor caído", tipo: "error" },
    { nombre: "Login exitoso", tipo: "success" },
    { nombre: "Pago rechazado", tipo: "error" },
    { nombre: "Usuario registrado", tipo: "success" }
  ];

  return (
    <div className="container">
      <h1>Clase 14</h1>

      <h2>Actividad 1</h2>
      <Button tipo="success" />

      <h2>Actividad 2</h2>

      <Card>
        <p>Card normal</p>
      </Card>

      <Card tipo="alert">
        <p>Card alerta</p>
      </Card>

      <Card destacado>
        <p>Card destacada</p>
      </Card>

      <Card tipo="alert" destacado>
        <p>Card alerta destacada</p>
      </Card>

      <h2>Actividad 3</h2>
      <ItemList items={items} />

    </div>
  );
}

export default App;