// 🎯 Capturamos los elementos necesarios
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

// 🟢 Mostrar el modal
abrirModal.addEventListener("click", () => {
  overlay.classList.remove("oculto");
});

// 🔴 Cerrar el modal con el botón
cerrarModal.addEventListener("click", () => {
  overlay.classList.add("oculto");
});

// ⚫ Cerrar el modal si se hace clic fuera del contenido
overlay.addEventListener("click", (evento) => {
  // Si el clic fue directamente en el fondo (overlay), no dentro del modal
  if (evento.target === overlay) {
    overlay.classList.add("oculto");
  }
});
