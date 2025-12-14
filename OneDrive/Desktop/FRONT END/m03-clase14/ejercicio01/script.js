// =====================
// Datos simulados (API falsa)
// =====================
const libros = [
{ id: 58, titulo: "Dune", genero: "ciencia ficción", fecha: 1965 },
{ id: 12, titulo: "Fundación", genero: "ciencia ficción", fecha: 1951 }
];

const resenas = {
58: [
{ autor: "Ana", comentario: "Excelente libro" }
]
};

// =====================
// Referencias al DOM
// =====================
const listaLibros = document.getElementById("lista-libros");
const detalleLibro = document.getElementById("detalle-libro");
const listaResenas = document.getElementById("lista-resenas");
const formResena = document.getElementById("form-resena");

// =====================
// Obtener todos los libros (GET /api/libros)
// =====================
function mostrarLibros() {
listaLibros.innerHTML = "";

libros.forEach(libro => {
const li = document.createElement("li");
li.textContent = libro.titulo;

// Al hacer click se simula GET /api/libros/:id
li.addEventListener("click", () => cargarLibro(libro.id));


listaLibros.appendChild(li);
});
}

// =====================
// Obtener libro por ID (GET /api/libros/58)
// =====================
function cargarLibro(id) {
const libro = libros.find(l => l.id === id);

detalleLibro.innerHTML = `
<p><strong>Título:</strong> ${libro.titulo}</p>
<p><strong>Género:</strong> ${libro.genero}</p>
<p><strong>Año:</strong> ${libro.fecha}</p>
`;

cargarResenas(id);
}

// =====================
// Obtener reseñas (GET /api/libros/58/resenas)
// =====================
function cargarResenas(id) {
listaResenas.innerHTML = "";

(resenas[id] || []).forEach(r => {
const li = document.createElement("li");
li.textContent = `${r.autor}: ${r.comentario}`;
listaResenas.appendChild(li);
});

// Guardamos el ID actual para el POST
formResena.dataset.libroId = id;
}

// =====================
// Agregar reseña (POST /api/libros/58/resenas)
// =====================
formResena.addEventListener("submit", e => {
e.preventDefault();

const id = formResena.dataset.libroId;
const autor = document.getElementById("autor").value;
const comentario = document.getElementById("comentario").value;

if (!resenas[id]) resenas[id] = [];

resenas[id].push({ autor, comentario });

formResena.reset();
cargarResenas(id);
});

// =====================
// Inicialización
// =====================
mostrarLibros();