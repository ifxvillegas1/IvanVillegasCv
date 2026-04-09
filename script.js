const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});