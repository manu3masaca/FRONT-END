// Seleccionamos el formulario, el input y el párrafo del mensaje
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

// Escuchamos el evento 'submit' del formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que se recargue la página

  // Obtenemos el valor ingresado
  const nombreUsuario = inputNombre.value.trim();

  // Si el usuario ingresó un nombre, mostramos el mensaje
  if (nombreUsuario) {
    // Usamos Template String para crear el mensaje dinámico
    mensaje.innerText = `Hola ${nombreUsuario}, bienvenida a la clase de JavaScript!`;
    console.log(`Mensaje mostrado para: ${nombreUsuario}`);
  } else {
    // Si no ingresó nada, mostramos un aviso
    mensaje.innerText = "Por favor, ingresa tu nombre antes de continuar.";
    console.log("No se ingresó un nombre");
  }
});
