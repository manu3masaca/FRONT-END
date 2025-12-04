// Seleccionamos el div y los botones
const texto = document.getElementById('texto');
const btnText = document.getElementById('btnText');
const btnHTML = document.getElementById('btnHTML');

// Evento para cambiar el texto con innerText
btnText.addEventListener('click', () => {
  // innerText reemplaza el texto sin interpretar etiquetas HTML
  texto.innerText = "Este texto fue cambiado usando innerText <strong>(no se interpreta HTML)</strong>";
  console.log("Se cambió el contenido usando innerText");
});

// Evento para cambiar el contenido con innerHTML
btnHTML.addEventListener('click', () => {
  // innerHTML reemplaza el contenido y SÍ interpreta etiquetas HTML
  texto.innerHTML = "Este texto fue cambiado usando <strong>innerHTML</strong> (HTML interpretado correctamente)";
  console.log("Se cambió el contenido usando innerHTML");
});
