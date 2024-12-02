// Activar el menú hamburguesa en dispositivos móviles
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Abrir el dropdown de "Servicios" en desktop
const dropdownServices = document.getElementById('dropdown-services');
dropdownServices.addEventListener('click', () => {
    const dropdownContent = dropdownServices.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
});

// Ajustar el desplazamiento al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // Espacio superior ajustado al header
        const topPosition = target.offsetTop - offset;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    });
});