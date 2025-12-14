// =====================
// Referencias al DOM
// =====================


const listaPosts = document.getElementById("lista-posts");
const formPost = document.getElementById("form-post");
const mensaje = document.getElementById("mensaje");


// =====================
// GET /posts?limit=10
// Obtener y mostrar posts
// =====================

async function obtenerPosts() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");


if (!response.ok) {
throw new Error(`Error HTTP: ${response.status}`);
}


const data = await response.json();
listaPosts.innerHTML = "";


data.forEach(post => {
const li = document.createElement("li");
li.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
listaPosts.appendChild(li);
});


} catch (error) {
mensaje.textContent = "❌ Error al cargar los posts";
}
}


// =====================
// POST /posts
// Crear nuevo post
// =====================


formPost.addEventListener("submit", async e => {
e.preventDefault();


const nuevoPost = {
title: document.getElementById("titulo").value,
body: document.getElementById("contenido").value,
userId: 1
};


try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(nuevoPost)
});


if (response.status === 201) {
mensaje.textContent = "✅ Post creado correctamente (201)";
formPost.reset();
}


} catch (error) {
mensaje.textContent = "❌ Error de conexión";
}
});


// =====================
// Inicialización
// =====================


obtenerPosts();