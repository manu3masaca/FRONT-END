// Obtenemos los parámetros de la URL
const parametros = new URLSearchParams(location.search);

// ✅ Extraemos el valor de 'nombre'
const nombre = parametros.get("nombre");

// ✅ Mostramos el mensaje personalizado
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

if (nombre) {
  mensajeBienvenida.textContent = `¡Bienvenida, ${nombre}! 🌸`;
} else {
  mensajeBienvenida.textContent = "No se proporcionó un nombre.";
}
