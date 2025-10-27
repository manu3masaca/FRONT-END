// Capturamos los elementos del formulario
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const exito = document.getElementById("exito");

// Escuchamos el evento "submit"
formulario.addEventListener("submit", function(evento) {
  
  // Evita recargar la página
  evento.preventDefault();

  // Limpiamos mensajes previos
  errorEmail.textContent = "";
  errorPassword.textContent = "";
  exito.textContent = "";

  // Variable para saber si hay errores
  let hayErrores = false;

  // ✅ Validación del email
  if (email.value.trim() === "") {
    errorEmail.textContent = "El campo email no puede estar vacío.";
    hayErrores = true;
  } else if (!email.value.includes("@")) {
    errorEmail.textContent = "Debe contener un '@' válido.";
    hayErrores = true;
  }

  // ✅ Validación de la contraseña
  if (password.value.trim() === "") {
    errorPassword.textContent = "La contraseña no puede estar vacía.";
    hayErrores = true;
  } else if (password.value.length < 6) {
    errorPassword.textContent = "Debe tener al menos 6 caracteres.";
    hayErrores = true;
  }

  // ✅ Si no hay errores, mostramos mensaje de éxito
  if (!hayErrores) {
    exito.textContent = "Formulario enviado correctamente 🎉";
    formulario.reset(); // Limpia los campos
  }
});
