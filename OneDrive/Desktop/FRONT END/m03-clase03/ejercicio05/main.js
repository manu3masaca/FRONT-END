// Seleccionamos cada elemento
const abuelo = document.getElementById('abuelo');
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

// Evento en el div abuelo
abuelo.addEventListener('click', () => {
  console.log('Hiciste clic en el ABUELO');
});

// Evento en el div padre
padre.addEventListener('click', () => {
  console.log('Hiciste clic en el PADRE');
});

// Evento en el div hijo
hijo.addEventListener('click', (evento) => {
  console.log('Hiciste clic en el HIJO');

  // Evitamos que el evento se propague hacia los elementos padres
  evento.stopPropagation();
});
