// Seleccionamos el campo de texto
const campoTexto = document.getElementById('campoTexto');

// Evento que se activa cuando se presiona una tecla
campoTexto.addEventListener('keydown', (evento) => {

  // Mostramos en la consola el nombre de la tecla presionada
  console.log(`Tecla presionada: ${evento.key}`);

  // También podemos mostrar el código de la tecla
  console.log(`Código de tecla: ${evento.code}`);
});
