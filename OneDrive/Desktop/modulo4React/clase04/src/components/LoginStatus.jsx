// ==============================
// Componente LoginStatus
// Muestra mensaje según estado de login
// ==============================
function LoginStatus({ isLoggedIn }) {
  // Validación usando if / else
  if (isLoggedIn) {
    return <p>Bienvenido</p>;
  } else {
    return <p>Debes iniciar sesión</p>;
  }
}

export default LoginStatus;
