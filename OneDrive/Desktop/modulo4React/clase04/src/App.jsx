import LoginStatus from "./components/LoginStatus";
import Notificaciones from "./components/Notificaciones";
import EstadoCarga from "./components/EstadoCarga";
import Mensajes from "./components/Mensajes";

function App() {
  return (
    <>
      <LoginStatus isLoggedIn={true} />
      <Notificaciones cantidad={3} />
      <EstadoCarga loading={false} />
      <Mensajes hayMensajes={true} />
    </>
  );
}

export default App;
