// Referencias al DOM
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

// Función que consulta un post que NO existe (ID 9999)
function buscarPost() {
  resultado.textContent = "Cargando...";

  fetch("https://jsonplaceholder.typicode.com/posts/9999")
    .then(response => {
      // =============================
      // Validación del código de estado
      // =============================
      if (response.status === 404) {
        resultado.textContent = "Post no encontrado (404).";
        throw new Error("Recurso no encontrado"); 
        // Se lanza error para evitar seguir al .then siguiente
      }

      if (!response.ok) {
        throw new Error("Error desconocido en la petición");
      }

      // Si es 200, convertimos a JSON
      return response.json();
    })
    .then(data => {
      // Mostrar el título si se obtuvo un post válido
      resultado.textContent = "Título del post: " + data.title;
    })
    .catch(error => {
      // Errores capturados (incluye el 404 que lanzamos arriba)
      console.error("Error:", error.message);
    });
}

/*
  Flujo del ejercicio:
  - fetch consulta un recurso inexistente (POST 9999).
  - El servidor responde 404.
  - Se detecta response.status === 404 y se muestra el mensaje en pantalla.
  - Se lanza un error para evitar continuar la cadena de .then().
  - .catch() captura el error y finaliza el flujo.
*/

btn.addEventListener("click", buscarPost);
