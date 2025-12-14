/* =====================================================
   COLECCIÓN: Lista de Pokémon
   Endpoint: /pokemon
   ===================================================== */
document.getElementById("btnColeccion").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const data = await response.json();

    console.log("COLECCIÓN DE POKÉMON:");
    console.log(data);

  } catch (error) {
    console.error("Error al obtener la colección", error);
  }
});

/* =====================================================
   RECURSO INDIVIDUAL: Pokémon con ID 5
   Endpoint: /pokemon/5
   ===================================================== */
document.getElementById("btnRecurso").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/5"
    );
    const data = await response.json();

    console.log("RECURSO INDIVIDUAL (POKÉMON ID 5):");
    console.log(data);

  } catch (error) {
    console.error("Error al obtener el recurso", error);
  }
});