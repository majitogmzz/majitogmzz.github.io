document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de aparición para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('methodology-step')) {
                    entry.target.style.transform = 'translateX(0)';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .methodology-step, .component, .justification-card').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Efecto de hover en los componentes
    const components = document.querySelectorAll('.component');
    components.forEach(component => {
        component.addEventListener('mouseenter', () => {
            component.style.transform = 'translateY(-5px)';
            component.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        component.addEventListener('mouseleave', () => {
            component.style.transform = 'translateY(0)';
            component.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Cambio de color del navbar al hacer scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
        } else {
            navbar.style.backgroundColor = 'var(--dark-bg)';
        }
        
        lastScroll = currentScroll;
    });

    // Animación para los placeholders de imágenes
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            placeholder.style.transform = 'scale(1.05)';
            setTimeout(() => {
                placeholder.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Mostrar/ocultar detalles en las secciones
    document.querySelectorAll('.section h3').forEach(heading => {
        heading.addEventListener('click', () => {
            const content = heading.nextElementSibling;
            if (content && content.classList.contains('section-content')) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Efecto de aparición gradual para los elementos
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 100);
    });
}); 