// 🎯 Capturamos los elementos necesarios
const btnSidebar = document.getElementById("btnSidebar");
const sidebar = document.getElementById("sidebar");

// 🔁 Alternamos el ancho al hacer clic en el botón
btnSidebar.addEventListener("click", () => {
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
});

// 🚪 Cerramos el sidebar si se hace clic fuera de él
document.addEventListener("click", (evento) => {
  // Verificamos si el clic fue fuera del sidebar y del botón
  if (!sidebar.contains(evento.target) && evento.target !== btnSidebar) {
    sidebar.style.width = "0";
  }
});
