// =====================
// Simulación de respuesta JSON
// =====================
const usuario = {
id: 101,
nombre: "Ana López",
email: "ana@example.com",
ultimo_acceso: "2023-10-05"
};


// =====================
// Cargar datos en la interfaz
// =====================
document.getElementById("nombre").textContent = usuario.nombre;
document.getElementById("email").textContent = usuario.email;
document.getElementById("ultimo-acceso").textContent = usuario.ultimo_acceso;
document.getElementById("id").textContent = usuario.id;