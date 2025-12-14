// =====================
// Referencias al DOM
// =====================


const formBusqueda = document.getElementById("form-busqueda");
const resultados = document.getElementById("resultados");
const metadatos = document.getElementById("metadatos");


// =====================
// Buscar usuarios (GET)
// =====================


formBusqueda.addEventListener("submit", async e => {
e.preventDefault();


const texto = document.getElementById("query").value;


try {
const response = await fetch(
`https://api.github.com/search/users?q=${texto}&per_page=10&page=1`
);


if (!response.ok) {
throw new Error(`Error HTTP: ${response.status}`);
}


const data = await response.json();


// =====================
// Uso del metadato total_count
// =====================


metadatos.textContent = `Mostrando ${data.items.length} de ${data.total_count} resultados`;


resultados.innerHTML = "";


data.items.forEach(user => {
const li = document.createElement("li");
li.textContent = user.login;
resultados.appendChild(li);
});


} catch (error) {
metadatos.textContent = "❌ Error al obtener los datos";
}
});