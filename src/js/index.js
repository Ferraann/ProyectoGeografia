const btnVolver = document.querySelector('.btn-volver-arriba');

window.addEventListener('scroll', () => {
    // Si bajamos más de 300px, añade la clase 'visible'
    if (window.scrollY > 300) {
        btnVolver.classList.add('visible');
    } else {
        btnVolver.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos el botón y el menú
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('.nav-list li a');

    // Evento al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active'); // Abre/Cierra el menú
        menuToggle.classList.toggle('is-active'); // Anima el botón
    });

    // (Opcional) Cerrar el menú automáticamente al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
    });
});