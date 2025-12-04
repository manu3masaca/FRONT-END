// Seleccionamos los elementos del DOM
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputDescripcion = document.getElementById('descripcion');
const zonaTarjetas = document.getElementById('zonaTarjetas');
const btnEliminar = document.getElementById('btnEliminar');

// Función para generar un color aleatorio en formato hexadecimal
function colorAleatorio() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Evento para crear una nueva tarjeta
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtenemos los valores de los inputs
  const nombre = inputNombre.value.trim();
  const descripcion = inputDescripcion.value.trim();

  // Validamos que ambos campos tengan contenido
  if (!nombre || !descripcion) {
    alert('Por favor completa ambos campos antes de crear la tarjeta.');
    return;
  }

  // Creamos el contenedor de la tarjeta
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  // Le damos un color de fondo aleatorio
  tarjeta.style.backgroundColor = colorAleatorio();

  // Usamos Template String e innerHTML para generar el contenido
  tarjeta.innerHTML = `
    <h2>${nombre}</h2>
    <p>${descripcion}</p>
  `;

  // Insertamos la nueva tarjeta en el contenedor
  zonaTarjetas.appendChild(tarjeta);

  // Limpiamos los campos del formulario
  formulario.reset();

  // Mostramos el resultado en consola
  console.log(`Tarjeta creada: ${nombre} - ${descripcion}`);
});

// Evento para eliminar la última tarjeta creada
btnEliminar.addEventListener('click', () => {
  const ultimaTarjeta = zonaTarjetas.lastElementChild;

  if (ultimaTarjeta) {
    zonaTarjetas.removeChild(ultimaTarjeta);
    console.log('Última tarjeta eliminada.');
  } else {
    alert('No hay tarjetas para eliminar.');
  }
});
