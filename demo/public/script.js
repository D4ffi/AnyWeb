// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Dropdown menu functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        // Para dispositivos táctiles
        if ('ontouchstart' in window) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Cerrar dropdowns al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// FAQ Accordion functionality (si existe en la página)
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth scroll for navigation links
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

// Logo animation si existe
const logoWrapper = document.getElementById('logoWrapper');
const interactiveLogo = document.getElementById('interactiveLogo');

if (logoWrapper && interactiveLogo) {
    let mouseX = 0;
    let mouseY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let logoRect = null;

    function updateLogoRect() {
        logoRect = logoWrapper.getBoundingClientRect();
    }

    updateLogoRect();
    window.addEventListener('resize', updateLogoRect);

    logoWrapper.addEventListener('mousemove', function(e) {
        if (!logoRect) return;

        const centerX = logoRect.left + logoRect.width / 2;
        const centerY = logoRect.top + logoRect.height / 2;
        
        mouseX = e.clientX - centerX;
        mouseY = e.clientY - centerY;

        const maxRotation = 12;
        targetRotateY = (mouseX / (logoRect.width / 2)) * maxRotation;
        targetRotateX = -(mouseY / (logoRect.height / 2)) * maxRotation;
    });

    logoWrapper.addEventListener('mouseleave', function() {
        targetRotateX = 0;
        targetRotateY = 0;
    });

    function animateLogo() {
        const smoothFactor = 0.08;
        
        currentRotateX += (targetRotateX - currentRotateX) * smoothFactor;
        currentRotateY += (targetRotateY - currentRotateY) * smoothFactor;

        interactiveLogo.style.transform = `
            perspective(1000px)
            rotateY(${currentRotateY}deg)
            rotateX(${currentRotateX}deg)
            scale3d(1.05, 1.05, 1.05)
        `;

        requestAnimationFrame(animateLogo);
    }

    animateLogo();

    let floatDirection = 1;
    let floatOffset = 0;
    
    setInterval(() => {
        if (floatOffset >= 10) floatDirection = -1;
        if (floatOffset <= -10) floatDirection = 1;
        
        floatOffset += floatDirection * 0.5;
        
        if (!logoWrapper.matches(':hover')) {
            interactiveLogo.style.transform += ` translateY(${floatOffset}px)`;
        }
    }, 50);
}
