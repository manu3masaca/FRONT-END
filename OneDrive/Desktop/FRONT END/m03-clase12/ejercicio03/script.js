// Referencias al DOM
const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const estado = document.getElementById("estado");

// Manejo del envío del formulario con async/await
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Mensaje mientras se envían los datos
  estado.textContent = "Enviando...";

  // Construimos el objeto a enviar
  const data = {
    title: titulo.value,
    body: contenido.value
  };

  try {
    // Petición POST a JSONPlaceholder
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // Validación del estado
    if (!respuesta.ok) {
      throw new Error("Error en la petición");
    }

    // Si todo sale bien:
    estado.textContent = "¡Post creado!";

  } catch (error) {
    estado.textContent = "Hubo un error al enviar.";
    console.error(error);
  }
});
