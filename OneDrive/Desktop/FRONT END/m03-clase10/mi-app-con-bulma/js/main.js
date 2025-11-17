// ==============================
// Esperar a que el DOM cargue
// ==============================
document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // Activar el menú burger (móvil)
  // ==============================
  const navbarBurger = document.querySelector(".navbar-burger");

  navbarBurger.addEventListener("click", () => {
    // Obtener el ID del menú al que controla el burger
    const target = navbarBurger.dataset.target;
    const menu = document.getElementById(target);

    // Alternar clases para abrir/cerrar el menú
    navbarBurger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  // ========================================
  // Verificar si hay un usuario autenticado
  // ========================================
  const currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

  // Mostrar/Ocultar botones según el estado del usuario
  if (currentUser) {
    document.getElementById("login-button").classList.add("is-hidden");
    document.getElementById("login-link-nav").classList.add("is-hidden");
    document.getElementById("logout-button").classList.remove("is-hidden");
  } else {
    document.getElementById("login-button").classList.remove("is-hidden");
    document.getElementById("login-link-nav").classList.remove("is-hidden");
    document.getElementById("logout-button").classList.add("is-hidden");
  }
});

// ==========================================
// Cerrar sesión y limpiar credenciales guardadas
// ==========================================
function handleLogout(event) {
  // Evitar que el enlace recargue la página antes de tiempo
  event.preventDefault();

  // Eliminar usuario de localStorage y sessionStorage
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");

  // Recargar la página para actualizar la interfaz
  window.location.reload();
}
