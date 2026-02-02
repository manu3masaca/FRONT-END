function ListaAlumnas() {
  const alumnas = [
    { id: 1, nombre: "Ana", asistio: true },
    { id: 2, nombre: "María", asistio: false },
    { id: 3, nombre: "Sofía", asistio: true },
  ];

  const presentes = alumnas.filter(
    (alumna) => alumna.asistio
  ).length;

  return (
    <div>
      <h2>Asistencia</h2>

      <ul>
        {alumnas.map((alumna) => (
          <li key={alumna.id}>
            {alumna.nombre} -{" "}
            {alumna.asistio ? "Presente" : "Ausente"}
          </li>
        ))}
      </ul>

      <p>Total presentes: {presentes}</p>
    </div>
  );
}

export default ListaAlumnas;