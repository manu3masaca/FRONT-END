// Referencias al DOM
const btn = document.getElementById("cargar");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

// Evento para cargar posts
btn.addEventListener("click", () => {

  // Mensaje mientras se espera respuesta
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  // URL correcta (úsala para probar)
//   const url = "https://jsonplaceholder.typicode.com/posts";

  // URL incorrecta (úsala para probar errores)
  const url = "https://jsonplaceholder.typicode.com/postsss";

  // Fetch clásico con promesas
  fetch(url)
    .then(response => {
      // Validación del estado de la respuesta
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json();
    })
    .then(data => {
      estado.textContent = "Posts cargados:";

      // Mostrar los títulos en <ul>
      data.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      // Mensaje de error visible para el usuario
      estado.textContent = "Ocurrió un error al cargar los datos.";
      console.error("Error:", err);
    });
});
