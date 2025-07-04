// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(`#${link.getAttribute('href').slice(1)}`);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});