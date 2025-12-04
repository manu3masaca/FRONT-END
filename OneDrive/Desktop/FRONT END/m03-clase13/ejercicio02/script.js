// Referencias al DOM
const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

// Evento para iniciar la carga
btn.addEventListener("click", () => {

  // 1. Mostrar mensaje de carga
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  // 2. Petición GET a API pública que sí permite CORS
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      // Validación del estado de la respuesta
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json(); // Convertir a JSON
    })
    .then(data => {
      // 3. Mostrar mensaje de éxito
      estado.textContent = "Posts cargados:";

      // 4. Llenar la lista con los títulos
      data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      // 5. Manejo visual del error
      estado.textContent = "Ocurrió un error al cargar los posts.";
      console.error("Error:", err);
    });

// Flujo del ejercicio:
// - Al hacer clic → mostramos "Cargando..."
// - fetch() consulta la API JSONPlaceholder
// - .then() procesa la respuesta si es correcta
// - La lista <ul> se llena con títulos
// - Si falla → .catch() muestra error en pantalla
});
