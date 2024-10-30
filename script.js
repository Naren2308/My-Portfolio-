// Smooth scrolling and active link highlighting
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Remove active class from all links and add to the clicked one
        document.querySelectorAll('.scroll-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active link based on scrolling
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        const id = section.getAttribute('id');
        if (top >= 0 && top < 300) {
            document.querySelectorAll('.scroll-link').forEach(link => link.classList.remove('active'));
            document.querySelector(`.scroll-link[href="#${id}"]`).classList.add('active');
        }
    });
});
