const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(event) {
    mobileMenu.classList.toggle('inactive');
}