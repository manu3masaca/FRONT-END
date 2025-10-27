// 🎯 Seleccionamos todos los botones de pregunta
const preguntas = document.querySelectorAll(".pregunta");

// 🔁 Recorremos cada una para agregar interacción
preguntas.forEach(pregunta => {
  pregunta.addEventListener("click", () => {

    // Obtenemos el siguiente elemento (la respuesta)
    const respuesta = pregunta.nextElementSibling;

    // 🧩 Alternamos su visibilidad
    if (respuesta.style.display === "block") {
      respuesta.style.display = "none";
    } else {
      respuesta.style.display = "block";
    }
  });
});
