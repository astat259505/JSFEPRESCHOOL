
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

const toggleMenu = () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);


const navLinks = document.querySelectorAll('.nav-link');

const closeMenu = (event) => {
    if (event.target.classList.contains('nav-link')) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    }
}

nav.addEventListener ('click', closeMenu);


