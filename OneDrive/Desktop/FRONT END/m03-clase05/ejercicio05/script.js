// 🎯 Seleccionamos todos los botones del acordeón
const botones = document.querySelectorAll(".titulo");

// 🔁 Recorremos cada botón
botones.forEach(boton => {
  boton.addEventListener("click", () => {

    // Obtenemos el siguiente elemento (contenido asociado)
    const contenido = boton.nextElementSibling;

    // Alternamos las clases de visibilidad y estado
    boton.classList.toggle("activo");
    contenido.classList.toggle("mostrar");
  });
});
