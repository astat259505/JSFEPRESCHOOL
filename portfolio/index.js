
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


console.log('Вёрстка соответствует макету. Ширина экрана 768px - +48\n');
console.log('Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки - +15\n');
console.log('На ширине экрана 768рх и меньше реализовано адаптивное меню - +22\n');
console.log('Итого - 75');
