// Seleccionamos el formulario, los inputs y el contenedor de tarjetas
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputDescripcion = document.getElementById('descripcion');
const zonaTarjetas = document.getElementById('zonaTarjetas');

// Evento al enviar el formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página

  // Obtenemos los valores de los inputs
  const nombre = inputNombre.value.trim();
  const descripcion = inputDescripcion.value.trim();

  // Validación: si algún campo está vacío, avisamos
  if (!nombre || !descripcion) {
    alert("Por favor completa ambos campos antes de crear la tarjeta.");
    return;
  }

  // Crear un nuevo div para la tarjeta
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  // Usamos Template String e innerHTML para generar el contenido dinámico
  tarjeta.innerHTML = `
    <h2>${nombre}</h2>
    <p>${descripcion}</p>
  `;

  // Agregamos la tarjeta a la zona de tarjetas
  zonaTarjetas.appendChild(tarjeta);

  // Limpiamos los campos del formulario
  formulario.reset();

  // Mostramos en consola la acción
  console.log(`Tarjeta creada: ${nombre} - ${descripcion}`);
});
