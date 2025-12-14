/* =====================================================
   Referencias a elementos del DOM
   ===================================================== */
const btnBuscar = document.getElementById("btnBuscar");
const userIdInput = document.getElementById("userIdInput");
const listaPosts = document.getElementById("listaPosts");

/* =====================================================
   Evento de búsqueda
   ===================================================== */
btnBuscar.addEventListener("click", async () => {

  const userId = userIdInput.value;

  // Validación simple
  if (!userId || userId <= 0) {
    alert("Ingresa un ID de usuario válido");
    return;
  }

  /* =====================================================
     Construcción dinámica de la URL con searchParams
     ===================================================== */
  const url = new URL("https://jsonplaceholder.typicode.com/posts");

  // Agregamos el parámetro de búsqueda
  url.searchParams.append("userId", userId);

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Limpiamos resultados anteriores
    listaPosts.innerHTML = "";

    /* =====================================================
       Mostrar resultados filtrados en una lista
       ===================================================== */
    data.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      listaPosts.appendChild(li);
    });

  } catch (error) {
    console.error("Error al obtener los posts", error);
  }
});