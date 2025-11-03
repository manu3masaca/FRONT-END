// =====================
// Variables principales
// =====================
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const selectCategoria = document.getElementById("categoria");
const listaTareas = document.getElementById("lista-tareas");
const btnBorrarTodo = document.getElementById("borrar-todo");
const sidebar = document.querySelector(".sidebar ul");

let tareas = [];
let categoriaActual = "Todas";

// =====================
// Cargar tareas al inicio
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const tareasGuardadas = localStorage.getItem("tareas");
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
  }
  mostrarTareasFiltradas();
});

// =====================
// Evento: agregar tarea
// =====================
formulario.addEventListener("submit", e => {
  e.preventDefault();

  const texto = inputTarea.value.trim();
  if (texto === "") {
    alert("⚠️ Debes escribir una tarea.");
    return;
  }

  const nuevaTarea = {
    id: Date.now(),
    texto,
    categoria: selectCategoria.value,
    completada: false
  };

  tareas.push(nuevaTarea);
  guardarEnLocalStorage();
  mostrarTareasFiltradas();
  formulario.reset();
});

// =====================
// Mostrar tareas
// =====================
function mostrarTareas(lista) {
  listaTareas.innerHTML = "";

  if (lista.length === 0) {
    listaTareas.innerHTML = "<p>No hay tareas.</p>";
    return;
  }

  lista.forEach(tarea => {
    const tareaEl = document.createElement("article");
    tareaEl.classList.add("tarea");
    if (tarea.completada) tareaEl.classList.add("completada");

    const textoEl = document.createElement("p");
    textoEl.textContent = `${tarea.texto} - ${tarea.categoria}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarTarea(tarea.id));

    textoEl.addEventListener("click", () => toggleCompletada(tarea.id));

    tareaEl.appendChild(textoEl);
    tareaEl.appendChild(btnEliminar);
    listaTareas.appendChild(tareaEl);
  });
}

// =====================
// Mostrar tareas según categoría actual
// =====================
function mostrarTareasFiltradas() {
  if (categoriaActual === "Todas") {
    mostrarTareas(tareas);
  } else {
    mostrarTareas(tareas.filter(t => t.categoria === categoriaActual));
  }
}

// =====================
// Eliminar tarea individual
// =====================
function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarEnLocalStorage();
  mostrarTareasFiltradas();
}

// =====================
// Marcar o desmarcar completada
// =====================
function toggleCompletada(id) {
  tareas = tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );
  guardarEnLocalStorage();
  mostrarTareasFiltradas();
}

// =====================
// Borrar todas las tareas
// =====================
btnBorrarTodo.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres borrar todas las tareas?")) {
    tareas = [];
    localStorage.removeItem("tareas"); // 🔧 Corrección clave
    mostrarTareas([]);
  }
});

// =====================
// Guardar en localStorage
// =====================
function guardarEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// =====================
// Filtro lateral
// =====================
sidebar.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    // Quitar clase activa anterior
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("activa"));

    // Activar la nueva
    e.target.classList.add("activa");

    // Cambiar categoría actual y actualizar vista
    categoriaActual = e.target.dataset.categoria;
    mostrarTareasFiltradas();
  }
});
