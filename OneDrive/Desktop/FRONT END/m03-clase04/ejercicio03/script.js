// Capturamos el textarea y el contador
const comentario = document.getElementById("comentario");
const contador = document.getElementById("contador");

// Establecemos el límite máximo
const limite = 150;

// Escuchamos el evento 'input' (se ejecuta cada vez que la usuaria escribe o borra texto)
comentario.addEventListener("input", function() {

  // Calculamos la cantidad de caracteres usados
  const caracteresUsados = comentario.value.length;

  // Calculamos los restantes
  const restantes = limite - caracteresUsados;

  // Mostramos los caracteres restantes en tiempo real
  contador.textContent = `${restantes} caracteres restantes`;

  // Si se supera el límite, recortamos el texto automáticamente
  if (caracteresUsados > limite) {
    comentario.value = comentario.value.slice(0, limite);
  }
});
