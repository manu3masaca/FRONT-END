// Referencias al DOM
const btn = document.getElementById("cargar");
const estado = document.getElementById("estado");

// Función asíncrona con try/catch
btn.addEventListener("click", async () => {

  estado.textContent = "Cargando...";

  try {
    // URL incorrecta para provocar error
    const resp = await fetch("https://jsonplaceholder.typicode.com/INVALIDO");

    // Validación manual
    if (!resp.ok) {
      throw new Error("Respuesta no OK");
    }

    await resp.json(); // (No se usará, solo demostrativo)

    estado.textContent = "Datos cargados (éxito inesperado)";

  } catch (error) {
    // Mensaje amigable para el usuario
    estado.textContent = "No se pudieron cargar los datos. Intente más tarde.";
    console.error("Error capturado:", error);
  }
});
