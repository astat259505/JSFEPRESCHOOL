const url = "https://api.themoviedb.org/3/discover/movie?api_key=90b552af88cbe2df9559bf3d706e20bc&sort_by=popularity.desc&page=1";

const mainContainer = document.querySelector('.main-container');

const addDiv = (el) => {
const div = document.createElement('div')
div.classList.add('movie-container')
div.textContent = `${el.original_title}`;
mainContainer.append(div);

const image = `<img class="movie-poster" src="https://image.tmdb.org/t/p/w1280${el.poster_path}" alt="poster">`
div.insertAdjacentHTML('beforeend', image);
}

const showData = (data) => {
    let movieArr = data.results;
   return movieArr.map(el => {
  addDiv(el) })
   }


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    showData(data)
}

getData()