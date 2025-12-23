const btnVolver = document.querySelector('.btn-volver-arriba');

window.addEventListener('scroll', () => {
    // Si bajamos más de 300px, añade la clase 'visible'
    if (window.scrollY > 300) {
        btnVolver.classList.add('visible');
    } else {
        btnVolver.classList.remove('visible');
    }
});