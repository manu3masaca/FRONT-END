import Pelicula from "./Pelicula";

function ListaPeliculas() {
  const peliculas = [
    { id: 1, titulo: "Inception", anio: 2010, genero: "Ciencia ficción" },
    { id: 2, titulo: "Titanic", anio: 1997, genero: "Romance" },
    { id: 3, titulo: "Avengers", anio: 2012, genero: "Acción" },
    { id: 4, titulo: "Coco", anio: 2017, genero: "Animación" },
    { id: 5, titulo: "Joker", anio: 2019, genero: "Drama" }
  ];

  return (
    <div>
      <h2>Películas Favoritas</h2>
      {peliculas.map((peli) => (
        <Pelicula
          key={peli.id}
          titulo={peli.titulo}
          anio={peli.anio}
          genero={peli.genero}
        />
      ))}
    </div>
  );
}

export default ListaPeliculas;