// Referencias al DOM
const estado = document.getElementById("estado");
const btn = document.getElementById("btn");
const retry = document.getElementById("retry");

// Función que intenta hacer fetch a una URL incorrecta
function cargarDatos() {
  // Mensaje inicial
  estado.textContent = "Cargando...";

  // Ocultar botón de reintentar mientras carga
  retry.style.display = "none";

  // Petición a una URL inválida
  fetch("https://jsonplaceholder.typicode.com/INVALIDO")
    .then(response => {
      // Forzar error si la respuesta no es correcta
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      return response.json();
    })
    .then(data => {
      // (No se ejecutará porque la URL es incorrecta)
      estado.textContent = "Datos cargados correctamente.";
    })
    .catch(error => {
      // Mostrar mensaje de error en el HTML
      estado.textContent = "No se pudieron cargar los datos.";

      // Mostrar botón de reintentar
      retry.style.display = "inline-block";

      console.error("Error detectado:", error);
    });
}

// Evento del botón principal
btn.addEventListener("click", cargarDatos);

// Evento del botón de reintentar
retry.addEventListener("click", cargarDatos);

/*
 Flujo del ejercicio:
 - El usuario hace clic en "Cargar Datos".
 - fetch intenta acceder a una URL inválida -> genera error.
 - .catch() captura el error y muestra un mensaje en el HTML.
 - Aparece el botón "Reintentar".
 - Al presionar "Reintentar", se vuelve a ejecutar la función cargarDatos().
*/
