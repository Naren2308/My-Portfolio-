// Smooth scrolling for section navigation
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href')); // Get the target section
        target.scrollIntoView({
            behavior: 'smooth', // Smooth scroll effect
            block: 'start' // Align the section at the top of the viewport
        });
    });
});
