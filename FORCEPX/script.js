document.addEventListener('DOMContentLoaded', () => {
    // Add scroll effect for navbar to slightly fade background
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.2)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.transition = 'all 0.3s ease';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
});
