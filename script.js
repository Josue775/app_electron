// Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", function() {
  document.getElementById("body").classList.toggle("body_move");
  document.getElementById("menu_side").classList.toggle("menu__side_move");
});

// Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
function updateMenu() {
  if (window.innerWidth > 760) {
    document.getElementById("body").classList.remove("body_move");
    document.getElementById("menu_side").classList.remove("menu__side_move");
  } else {
    document.getElementById("body").classList.add("body_move");
    document.getElementById("menu_side").classList.add("menu__side_move");
  }
}

window.addEventListener("resize", updateMenu);
window.addEventListener("load", updateMenu);

// Encuentra el elemento de opción "Trámites" y el submenú
const tramitesOption = document.querySelector('.options__menu .option');
const subMenu = document.querySelector('.options__menu .sub-menu');

// Agrega un evento de clic al elemento de opción "Trámites"
tramitesOption.addEventListener('click', function() {
  // Alterna la clase "active" en el submenú para mostrarlo u ocultarlo
  subMenu.classList.toggle('active');
});

function cargarContenido(archivo) {
  fetch(archivo)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('contenido').innerHTML = data;
    })
    .catch(error => {
      console.error('Error al cargar el archivo:', error);
    });
}

const opciones = document.querySelectorAll('.options__menu .option');

// Agrega un evento click a cada opción
opciones.forEach(opcion => {
  opcion.addEventListener('click', function() {
    // Elimina la clase 'selected' de todas las opciones
    opciones.forEach(op => op.classList.remove('selected'));

    // Agrega la clase 'selected' a la opción actual
    this.classList.add('selected');
  });
});

