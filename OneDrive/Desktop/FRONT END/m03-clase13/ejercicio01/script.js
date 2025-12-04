// Intentamos hacer una petición a un servidor que NO permite CORS.
// El navegador bloqueará la solicitud por políticas de seguridad.

fetch("https://api.ejemplo-sin-cors.com/data")
  .then(response => {
    // Este bloque casi nunca se alcanzará en un caso real de CORS
    console.log("Respuesta recibida:", response);
  })
  .catch(error => {
    // El error caerá aquí y mostrará un mensaje relacionado con CORS
    console.error("Error detectado:", error);
  });

// Flujo del ejercicio:
// 1. Se ejecuta fetch().
// 2. El navegador intenta pedir el recurso.
// 3. El servidor NO envía encabezados CORS permitiendo el acceso.
// 4. El navegador bloquea la respuesta ANTES de que llegue al JS.
// 5. El .catch() captura el error y lo muestra en consola.
