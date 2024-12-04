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
// Desplazar las categorías para centrarlas debajo del sticky-header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const stickyOffset = 180; // Altura del sticky-header
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - stickyOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});



// Seleccionar elementos
const servicesHeader = document.querySelector('.sticky-header');
const servicesSection = document.querySelector('#services');

// Configuración del Intersection Observer
const observer = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            servicesHeader.classList.add('hidden'); // Ocultar el encabezado
        } else {
            servicesHeader.classList.remove('hidden'); // Mostrar el encabezado
        }
    },
    {
        root: null, // Observa en toda la ventana
        threshold: 0.1, // Detectar cuando el 10% del contenido es visible
    }
);

// Observar la sección de servicios
observer.observe(servicesSection);



// Seleccionar todos los contenedores de los botones
const toggleContainers = document.querySelectorAll('.toggle-container');

toggleContainers.forEach((container) => {
    const button = container.querySelector('.toggle-button');
    const text = container.querySelector('.toggle-text');
    const target = container.parentElement.nextElementSibling; // Contenedor asociado

    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);

        // Alternar clases y texto
        if (isExpanded) {
            target.classList.remove('open');
            text.textContent = 'Ver servicios'; // Texto al colapsar
        } else {
            target.classList.add('open');
            text.textContent = 'Ocultar servicios'; // Texto al expandir
        }
    });
});