// Secuencia correcta que el jugador debe seguir
const secuenciaCorrecta = ['a', 's', 'd', 'f'];

// Array temporal donde se guardan las teclas presionadas por el usuario
let secuenciaUsuario = [];

// Referencia al elemento donde se mostrará el mensaje
const mensaje = document.getElementById('mensaje');

// Escuchamos los eventos de teclado en toda la página
document.addEventListener('keydown', (evento) => {

  // Evitamos acciones por defecto (por ejemplo, barra espaciadora que baja la página)
  evento.preventDefault();

  // Capturamos la tecla presionada (en minúsculas para evitar errores)
  const tecla = evento.key.toLowerCase();

  console.log(`Tecla presionada: ${tecla}`);

  // Solo registramos las teclas a, s, d, f (las del juego)
  if (['a', 's', 'd', 'f'].includes(tecla)) {

    // Agregamos la tecla presionada al arreglo del usuario
    secuenciaUsuario.push(tecla);

    // Mostramos visualmente el progreso
    mensaje.textContent = `Secuencia: ${secuenciaUsuario.join(' → ').toUpperCase()}`;

    // Verificamos si ya completó la secuencia
    if (secuenciaUsuario.length === secuenciaCorrecta.length) {
      if (arraysIguales(secuenciaUsuario, secuenciaCorrecta)) {
        mensaje.textContent = '🎉 ¡Ganaste! Secuencia correcta.';
        mensaje.style.color = '#4caf50'; // verde
      } else {
        mensaje.textContent = '❌ Secuencia incorrecta. Inténtalo otra vez.';
        mensaje.style.color = '#ef5350'; // rojo
      }

      // Reiniciamos la secuencia del usuario para volver a jugar
      secuenciaUsuario = [];
    }
  }
});

// 🔧 Función auxiliar para comparar los dos arrays
function arraysIguales(a, b) {
  return a.length === b.length && a.every((valor, i) => valor === b[i]);
}
