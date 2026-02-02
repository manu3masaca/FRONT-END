const ESTADO_USUARIO = {
  ACTIVO: "ACTIVO",
  INACTIVO: "INACTIVO",
  INVITADO: "INVITADO",
};

function PerfilUsuario() {
  const usuario = {
    nombre: "Lucía",
    edad: 17,
    estado: ESTADO_USUARIO.ACTIVO,
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>

      {usuario.edad < 18 && <p>Usuario menor de edad</p>}

      <p>Estado: {usuario.estado}</p>
    </div>
  );
}

export default PerfilUsuario;