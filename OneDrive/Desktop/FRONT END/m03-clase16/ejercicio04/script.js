/* =====================================================
   Referencias al DOM
   ===================================================== */
const btnBuscar = document.getElementById("btnBuscar");
const userIdInput = document.getElementById("userIdInput");
const orderSelect = document.getElementById("orderSelect");
const listaPosts = document.getElementById("listaPosts");

/* =====================================================
   Evento de búsqueda con filtros múltiples
   ===================================================== */
btnBuscar.addEventListener("click", async () => {

  const userId = userIdInput.value;
  const order = orderSelect.value;

  if (!userId || userId <= 0) {
    alert("Ingresa un ID de usuario válido");
    return;
  }

  /* =====================================================
     Construcción dinámica de la URL con múltiples filtros
     ===================================================== */
  const url = new URL("https://jsonplaceholder.typicode.com/posts");

  url.searchParams.append("userId", userId); // Filtro por usuario
  url.searchParams.append("_sort", "title"); // Ordenar por título
  url.searchParams.append("_order", order);  // asc o desc

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Limpiar resultados anteriores
    listaPosts.innerHTML = "";

    /* =====================================================
       Mostrar resultados
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