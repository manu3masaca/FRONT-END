// ============================================================
// Variables principales
// ============================================================

// Contenedor de cursos
const listaCursos = document.querySelector('#lista-cursos');
// Contenedor del carrito
const carrito = document.querySelector('#carrito tbody');
// Botón para vaciar carrito
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');

// Arreglo donde guardaremos los cursos agregados
let articulosCarrito = [];

// ============================================================
// Listeners
// ============================================================

// Al cargar el documento, activamos los eventos
cargarEventListeners();

function cargarEventListeners() {
    // Detecta clic en botón "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Detecta clic para eliminar un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Detecta clic en "Vaciar Carrito"
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
}

// ============================================================
// Funciones
// ============================================================

// Añadir curso al carrito
function agregarCurso(e) {
    e.preventDefault();

    // Verifica si el clic fue en el botón "Agregar al carrito"
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee la información del curso y la prepara para el carrito
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Verifica si el curso ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        // Si ya existe, incrementamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Si no existe, lo agregamos al arreglo
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    // Muestra el carrito actualizado
    carritoHTML();
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Filtramos para quitar el curso seleccionado
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        // Volvemos a renderizar el HTML del carrito
        carritoHTML();
    }
}

// Vaciar todo el carrito
function vaciarCarrito() {
    articulosCarrito = []; // Reseteamos el arreglo
    limpiarHTML(); // Eliminamos el HTML del carrito
}

// Genera el HTML dentro del carrito
function carritoHTML() {
    // Limpia el HTML previo
    limpiarHTML();

    // Recorre el carrito y genera cada fila
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;

        carrito.appendChild(row);
    });
}

// Elimina los cursos del tbody para evitar duplicados visuales
function limpiarHTML() {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}
