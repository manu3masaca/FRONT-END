// Referencias al DOM
const form = document.getElementById("form");
const estado = document.getElementById("estado");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

// Evento submit del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar recarga

  // 1. Mostrar mensaje de envío
  estado.textContent = "Enviando...";

  // 2. Crear objeto con los datos del formulario
  const nuevoPost = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1
  };

  // 3. Petición POST a la API simulada
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoPost)
  })
    .then(response => {
      // Validación de respuesta
      if (!response.ok) {
        throw new Error("Error al enviar");
      }
      return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
      // 4. Mostrar mensaje de éxito
      estado.textContent = "¡Post creado! (simulado)";
      console.log("Respuesta:", data);
    })
    .catch(err => {
      // 5. Manejo de error
      estado.textContent = "Error al enviar";
      console.error("Error:", err);
    });

  // Flujo del ejercicio:
  // - Se evita la recarga del formulario
  // - Se muestra "Enviando..."
  // - fetch() hace POST con los datos
  // - Si la API responde bien -> "¡Post creado!"
  // - Si falla -> "Error al enviar"
});
