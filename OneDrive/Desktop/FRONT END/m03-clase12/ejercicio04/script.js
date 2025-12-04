// Referencias al DOM
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

// Evento principal
btn.addEventListener("click", () => {

  // Deshabilitar el botón y mostrar mensaje inicial
  btn.disabled = true;
  mensaje.textContent = "Espere 3 segundos...";

  // Usar setTimeout para esperar 3 segundos
  setTimeout(() => {

    // Rehabilitar botón y mostrar mensaje final
    btn.disabled = false;
    mensaje.textContent = "¡Listo!";

  }, 3000);
});
