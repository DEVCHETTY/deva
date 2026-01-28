// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple fade-in animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;

    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initial animation state
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
});
