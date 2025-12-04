// Seleccionamos el segundo párrafo por su ID
const parrafo = document.getElementById('parrafo2');

// Agregamos un evento de clic
parrafo.addEventListener('click', () => {
  console.clear(); // Limpia la consola cada vez que haces clic

  // Mostramos el elemento padre
  console.log("Padre:", parrafo.parentElement);

  // Mostramos su primer hijo (si lo tiene)
  console.log("Primer hijo:", parrafo.firstElementChild);

  // Mostramos su hermano anterior
  console.log("Hermano anterior:", parrafo.previousElementSibling);

  // Mostramos su hermano siguiente
  console.log("Hermano siguiente:", parrafo.nextElementSibling);
});
