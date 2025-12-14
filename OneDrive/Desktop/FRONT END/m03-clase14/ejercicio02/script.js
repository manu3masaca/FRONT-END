// =====================
// Registro de usuario (POST)
// =====================
const formRegistro = document.getElementById("form-registro");
const msgRegistro = document.getElementById("msg-registro");


formRegistro.addEventListener("submit", e => {
e.preventDefault();


// Simulación de respuesta 201
msgRegistro.textContent = "✅ Usuario registrado correctamente (201)";
formRegistro.reset();
});


// =====================
// Eliminar producto inexistente (DELETE)
// =====================


const btnEliminar = document.getElementById("eliminar-producto");
const msgEliminar = document.getElementById("msg-eliminar");


btnEliminar.addEventListener("click", () => {
// Simulación de error 404
msgEliminar.textContent = "❌ Error: el producto no existe (404)";
});


// =====================
// Actualizar correo (PATCH)
// =====================


const btnActualizar = document.getElementById("actualizar-correo");
const msgActualizar = document.getElementById("msg-actualizar");


btnActualizar.addEventListener("click", () => {
// Simulación de respuesta 200
msgActualizar.textContent = "✉️ Correo actualizado correctamente (200)";
});


// =====================
// Obtener pedidos (GET)
// =====================


const btnPedidos = document.getElementById("ver-pedidos");
const listaPedidos = document.getElementById("lista-pedidos");


btnPedidos.addEventListener("click", () => {
listaPedidos.innerHTML = "";


// Simulación de datos del servidor
const pedidos = ["Pedido #1001", "Pedido #1002", "Pedido #1003"];


pedidos.forEach(pedido => {
const li = document.createElement("li");
li.textContent = pedido;
listaPedidos.appendChild(li);
});
});