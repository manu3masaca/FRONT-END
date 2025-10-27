// 🎯 Capturamos el botón y el body
const boton = document.getElementById("toggleTema");
const body = document.body;

// 🔁 Escuchamos el clic en el botón
boton.addEventListener("click", () => {

  // Alternamos entre las clases "oscuro" y "claro"
  body.classList.toggle("oscuro");
  body.classList.toggle("claro");

  // 🔤 Actualizamos el texto del botón según el modo actual
  if (body.classList.contains("oscuro")) {
    boton.textContent = "Cambiar a modo claro 🌞";
  } else {
    boton.textContent = "Cambiar a modo oscuro 🌙";
  }
});
