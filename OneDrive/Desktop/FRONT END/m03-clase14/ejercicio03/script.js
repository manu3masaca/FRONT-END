// =====================
// Referencias al DOM
// =====================
const btnEditar = document.getElementById("btn-editar");
const formEditar = document.getElementById("form-editar");
const tituloPost = document.getElementById("titulo-post");
const inputTitulo = document.getElementById("nuevo-titulo");
const mensaje = document.getElementById("mensaje");

// =====================
// Mostrar formulario de edición
// =====================
btnEditar.addEventListener("click", () => {
formEditar.hidden = false;
inputTitulo.value = tituloPost.textContent;
});

// =====================
// Guardar cambios (PATCH)
// =====================
formEditar.addEventListener("submit", e => {
e.preventDefault();

// Simulación de respuesta exitosa del servidor (200 OK)
tituloPost.textContent = inputTitulo.value;
mensaje.textContent = "✅ Título actualizado correctamente (200)";

formEditar.hidden = true;
});