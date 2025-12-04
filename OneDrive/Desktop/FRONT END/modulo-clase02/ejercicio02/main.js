// Seleccionamos el botón y la sección donde se agregarán los párrafos
const boton = document.getElementById('btnAgregar');
const zonaParrafos = document.getElementById('zonaParrafos');

// Array con frases aleatorias
const frases = [
  "El conocimiento es poder.",
  "Aprender nunca está de más.",
  "El DOM puede ser muy divertido.",
  "JavaScript lo hace posible.",
  "Crear es aprender."
];

// Evento de clic para agregar un nuevo párrafo
boton.addEventListener('click', () => {
  // Crear un nuevo elemento <p>
  const nuevoParrafo = document.createElement('p');

  // Escoger una frase aleatoria
  const textoAleatorio = frases[Math.floor(Math.random() * frases.length)];

  // Asignar el texto al párrafo
  nuevoParrafo.textContent = textoAleatorio;

  // Agregar el párrafo dentro de la sección
  zonaParrafos.appendChild(nuevoParrafo);

  // Mostrar en consola la acción
  console.log("Nuevo párrafo agregado:", textoAleatorio);
});
