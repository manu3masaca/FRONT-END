// Seleccionamos el enlace
const enlace = document.getElementById('enlace');

// Agregamos un evento de clic al enlace
enlace.addEventListener('click', (evento) => {

  // Evitamos que el enlace redirija a la URL
  evento.preventDefault();

  // Mostramos un mensaje en consola o en pantalla
  console.log('Redirección bloqueada con preventDefault()');
  alert('No se realizará la redirección. preventDefault() está funcionando.');
});
