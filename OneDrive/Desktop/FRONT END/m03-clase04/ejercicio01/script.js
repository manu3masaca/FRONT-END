// Capturamos el formulario y el contenedor donde mostraremos los datos
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// Escuchamos el evento "submit" del formulario
formulario.addEventListener("submit", function(evento) {

  // ✅ Evitamos la recarga de la página
  evento.preventDefault();

  // ✅ Obtenemos los valores ingresados por la usuaria
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  // ✅ Mostramos los datos directamente en la página
  resultado.innerHTML = `👋 Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años.`;
});
