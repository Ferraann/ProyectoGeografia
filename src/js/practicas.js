/* =========================================
   FUNCIONALIDAD DEL MODAL (POPUP) DE IMÁGENES
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtenemos los elementos del DOM
    const body = document.body;
    const modal = document.getElementById('imagenModal');
    const modalImg = document.getElementById('imgExpandida');
    const captionText = document.getElementById('caption');
    const cerrarSpan = document.getElementsByClassName('cerrar-modal')[0];

    // Seleccionamos TODAS las imágenes principales de las prácticas.
    // Buscamos la primera imagen dentro de cada .contenedor-img
    const imagenesPracticas = document.querySelectorAll('.contenedor-img img:first-child');

    // 2. Añadimos el evento CLICK a cada imagen de práctica
    imagenesPracticas.forEach(img => {
        img.style.cursor = 'pointer'; // Aseguramos que parezca clicable

        img.addEventListener('click', function() {
            // Mostramos el modal añadiendo la clase 'activo'
            modal.classList.add('activo');
            // Que no se pueda scrollear
            body.classList.add('no-scroll');
            // Ponemos en el modal la misma ruta (src) de la imagen clicada
            modalImg.src = this.src;
            // Opcional: Usamos el atributo 'alt' como texto descriptivo debajo
            captionText.innerHTML = this.alt;
        });
    });

    // 3. Función para CERRAR el modal
    function cerrarModal() {
        modal.classList.remove('activo');
        body.classList.remove('no-scroll');
    }

    // Cerrar al hacer click en la X
    cerrarSpan.addEventListener('click', cerrarModal);

    // Cerrar al hacer click fuera de la imagen (en el fondo oscuro)
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Opcional: Cerrar al presionar la tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.classList.contains('activo')) {
            cerrarModal();
        }
    });
});