// Seleccionamos todos los elementos <li>
const elementos = document.querySelectorAll('li');

// Recorremos cada elemento para asignarle eventos
elementos.forEach((item) => {

  // Evento cuando el mouse pasa por encima del elemento
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#4fc3f7';
    item.style.color = '#121212';
  });

  // Evento cuando el mouse sale del elemento
  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = '#1e1e1e';
    item.style.color = '#eaeaea';
  });
});
