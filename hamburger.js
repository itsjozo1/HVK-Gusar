
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-link');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
