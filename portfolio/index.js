const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

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


const portfolioButton = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioButtons = document.querySelectorAll('.portfolio-button');

const changeImage = (event) => {
    if (event.target.classList.contains('portfolio-button')) {
      portfolioImages.forEach ((img, index) => img.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`)
    }
};

portfolioButton.addEventListener('click', changeImage);


const changeClassActive = (event) => {
    portfolioButtons.forEach (button => button.classList.remove('active'));
    event.target.classList.add('active');
}

portfolioButton.addEventListener('click', changeClassActive);

const changeThemeArr = ['.body', '.hero-container', '.skills-container', '.section-title-skills', '.section-title-container', '.skills-title', 
'.skills-text', '.portfolio-container', '.section-title-portfolio', '.button-two', '.video-container', 
'.section-title-video', '.price-container', '.section-title-price', '.sub', '.sub-description', '.nav', '.nav-link', '.line']

const changeTheme = (event) => {
    changeThemeArr.forEach(cl => document.querySelectorAll(cl).forEach(el => el.classList.toggle('light-theme')));
    changeThemeButton.classList.toggle('change');
    if (event.target.classList.contains('change')) {
      theme = 'light'
    }
}

const changeThemeButton = document.querySelector('.theme-switch');
changeThemeButton.addEventListener('click', changeTheme);

const getTranslate = (lng) => {
  const lngData = document.querySelectorAll('[data-i18n]');
  lngData.forEach(el => el.textContent = i18Obj[lng][el.dataset.i18n]);
}

const russianLngButton = document.querySelector('.russian');
const englishLngButton = document.querySelector('.english');


const lngChange = (event) => {
  russianLngButton.classList.remove('active-lng');
  englishLngButton.classList.remove('active-lng');
  event.target.classList.add('active-lng');
}

russianLngButton.addEventListener('click', lngChange);
englishLngButton.addEventListener('click', lngChange);

russianLngButton.addEventListener('click', () =>
getTranslate('ru'))

englishLngButton.addEventListener('click', () =>
getTranslate('en'))

let lang = 'en';
let theme = 'dark'

russianLngButton.addEventListener('click', () =>
lang = 'ru');



 

const setLocalStorage = () => {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme)
}
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang')
    getTranslate(lang);
  }
   if (localStorage.getItem('lang') === 'en') {
    russianLngButton.classList.remove('active-lng');
    englishLngButton.classList.add('active-lng')
  } 
  if (localStorage.getItem('lang') === 'ru') {
    englishLngButton.classList.remove('active-lng');
    russianLngButton.classList.add('active-lng')
  } 
  if (localStorage.getItem('theme') === 'light') { 
    changeTheme();
  }    
  }

window.addEventListener('load', getLocalStorage);

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadPortfolioImages = () => {
  seasons.forEach(season => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`
    }
  })
}

preloadPortfolioImages();











