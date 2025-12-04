// Seleccionamos el botón
const btn = document.getElementById("btn");

// Evento que demuestra el funcionamiento del Event Loop
btn.addEventListener("click", () => {

  // Log síncrono: se ejecuta inmediatamente
  console.log("Inicio");

  // Tarea asíncrona: setTimeout va a la cola de macrotareas
  setTimeout(() => {
    console.log("Timeout");
  }, 0);

  // Log síncrono: se ejecuta antes que cualquier tarea asíncrona
  console.log("Fin");
});
