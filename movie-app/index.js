

const mainContainer = document.querySelector('.main-container');

const addDiv = (el) => {
const div = document.createElement('div')
div.classList.add('movie-container')
mainContainer.append(div);

const image = `<img class="movie-poster" src="https://image.tmdb.org/t/p/w1280${el.poster_path}" alt="poster">`
div.insertAdjacentHTML('beforeend', image);

const movieInfo = document.createElement('div')
movieInfo.classList.add('movie-info')
div.append(movieInfo)

const slider = `<div class="slider"><h3>Overview</h3><p>${el.overview}</p></div>`
div.insertAdjacentHTML('beforeend', slider)

const movieTitle = `<h2 class="movie-title">${el.original_title}</h2>`
movieInfo.insertAdjacentHTML('beforeend', movieTitle)

const movieRate = `<span class="movie-rate">${el.vote_average}</span>`
movieInfo.insertAdjacentHTML('beforeend', movieRate)

if (el.vote_average > 8) {
    movieRate.style.color = 'green'
}
}

const showData = (data) => {
    let movieArr = data.results;
   return movieArr.map(el => {
  addDiv(el) })
   }

const searchLine = document.querySelector('.search-line')



let url = "https://api.themoviedb.org/3/discover/movie?api_key=90b552af88cbe2df9559bf3d706e20bc&sort_by=popularity.desc&page=1"

let searchValue 

searchLine.addEventListener('search', () => {
    searchValue = searchLine.value
    mainContainer.innerHTML = ''
    if (searchValue === '') {
    url = "https://api.themoviedb.org/3/discover/movie?api_key=90b552af88cbe2df9559bf3d706e20bc&sort_by=popularity.desc&page=1"
    } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=90b552af88cbe2df9559bf3d706e20bc&query=${searchValue}&page=1`
    }
    getData()

})

console.log(url)









async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    showData(data)
}

getData()
