// JavaScript for smooth scrolling
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    
    const targetId = this.getAttribute('href'); // Get the href attribute
    const targetSection = document.querySelector(targetId); // Find the target section
    
    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
