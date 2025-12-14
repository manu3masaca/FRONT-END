/* =====================================================
   Variables globales
   ===================================================== */
let posts = [];          // Colección completa
let paginaActual = 0;   // Página actual
const postsPorPagina = 10;

/* =====================================================
   Referencias al DOM
   ===================================================== */
const listaPosts = document.getElementById("listaPosts");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

/* =====================================================
   Obtener colección completa (100 posts)
   ===================================================== */
async function obtenerPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = await response.json();

    // Mostrar la primera página
    mostrarPagina();

  } catch (error) {
    console.error("Error al obtener los posts", error);
  }
}

/* =====================================================
   Mostrar página actual usando slice
   ===================================================== */
function mostrarPagina() {

  // Calcular índices
  const inicio = paginaActual * postsPorPagina;
  const fin = inicio + postsPorPagina;

  // Obtener bloque de posts
  const postsPagina = posts.slice(inicio, fin);

  // Limpiar lista
  listaPosts.innerHTML = "";

  // Mostrar posts
  postsPagina.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    listaPosts.appendChild(li);
  });

  // Controlar botones
  btnAnterior.disabled = paginaActual === 0;
  btnSiguiente.disabled = fin >= posts.length;
}

/* =====================================================
   Eventos de paginado
   ===================================================== */
btnAnterior.addEventListener("click", () => {
  paginaActual--;
  mostrarPagina();
});

btnSiguiente.addEventListener("click", () => {
  paginaActual++;
  mostrarPagina();
});

/* =====================================================
   Inicializar app
   ===================================================== */
obtenerPosts();