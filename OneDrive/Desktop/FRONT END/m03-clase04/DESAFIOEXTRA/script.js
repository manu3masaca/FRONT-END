// 🧮 Capturamos los elementos del formulario
const formCalculadora = document.getElementById("formCalculadora");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const errorCalc = document.getElementById("errorCalc");

// 🎯 Escuchamos el evento "submit"
formCalculadora.addEventListener("submit", function(evento) {
  
  // Evitamos recargar la página
  evento.preventDefault();

  // Limpiamos mensajes previos
  errorCalc.textContent = "";
  resultado.textContent = "";

  // Obtenemos los valores
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  const op = operacion.value;

  // ✅ Validación: ambos campos deben ser números
  if (isNaN(valor1) || isNaN(valor2)) {
    errorCalc.textContent = "Debes ingresar dos números válidos.";
    return;
  }

  // ✅ Validación: evitar división por cero
  if (op === "/" && valor2 === 0) {
    errorCalc.textContent = "No se puede dividir entre cero.";
    return;
  }

  // 🧩 Realizamos la operación seleccionada
  let resultadoFinal;
  switch (op) {
    case "+": resultadoFinal = valor1 + valor2; break;
    case "-": resultadoFinal = valor1 - valor2; break;
    case "*": resultadoFinal = valor1 * valor2; break;
    case "/": resultadoFinal = valor1 / valor2; break;
  }

  // ✨ Mostramos el resultado en pantalla sin recargar
  resultado.textContent = `Resultado: ${resultadoFinal}`;
});

