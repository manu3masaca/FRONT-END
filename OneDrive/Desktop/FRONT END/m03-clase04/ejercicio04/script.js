// Capturamos los elementos del formulario
const formulario = document.getElementById("formulario");
const errorColor = document.getElementById("errorColor");
const errorPasatiempos = document.getElementById("errorPasatiempos");
const resultado = document.getElementById("resultado");

// Escuchamos el evento 'submit'
formulario.addEventListener("submit", function(evento) {

  // Evitamos la recarga de página
  evento.preventDefault();

  // Limpiamos mensajes previos
  errorColor.textContent = "";
  errorPasatiempos.textContent = "";
  resultado.textContent = "";

  // Variable de control de errores
  let hayErrores = false;

  // ✅ Capturamos el color seleccionado (solo uno posible)
  const colorSeleccionado = document.querySelector('input[name="color"]:checked');

  if (!colorSeleccionado) {
    errorColor.textContent = "Debes seleccionar un color.";
    hayErrores = true;
  }

  // ✅ Capturamos los pasatiempos seleccionados (pueden ser varios)
  const pasatiemposSeleccionados = document.querySelectorAll('input[name="pasatiempo"]:checked');
  const valoresPasatiempos = Array.from(pasatiemposSeleccionados).map(item => item.value);

  if (valoresPasatiempos.length === 0) {
    errorPasatiempos.textContent = "Debes seleccionar al menos un pasatiempo.";
    hayErrores = true;
  }

  // ✅ Si no hay errores, mostramos la selección
  if (!hayErrores) {
    resultado.textContent = `🎨 Color favorito: ${colorSeleccionado.value} | 🎯 Pasatiempos: ${valoresPasatiempos.join(", ")}`;
    formulario.reset();
  }
});
