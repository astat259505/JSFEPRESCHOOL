
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


const portfolioButtons = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');

const changeImage = (event) => {
    if (event.target.classList.contains('portfolio-button')) {
      portfolioImages.forEach ((img, index) => img.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`)
    }
};

portfolioButtons.addEventListener('click', changeImage);


