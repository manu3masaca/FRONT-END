// Capturamos los elementos del formulario
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const errorNombre = document.getElementById("errorNombre");

// Escuchamos el evento submit
formulario.addEventListener("submit", function(evento) {
  
  // Evitamos la recarga
  evento.preventDefault();
  errorNombre.textContent = "";

  // ✅ Validamos el nombre
  if (nombre.value.trim() === "") {
    errorNombre.textContent = "Por favor ingresa tu nombre.";
    return;
  }

  // ✅ Redirigimos a la página con el parámetro en la URL
  const valor = encodeURIComponent(nombre.value.trim());
  location.href = `bienvenida.html?nombre=${valor}`;
});
