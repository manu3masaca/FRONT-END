// Agregamos un evento global de clic al documento
document.addEventListener('click', (evento) => {

  // Mostramos en consola el elemento que fue clickeado
  console.log('Elemento clickeado:', evento.target);

  // También podemos mostrar el tipo de etiqueta del elemento
  console.log('Etiqueta HTML:', evento.target.tagName);
});
