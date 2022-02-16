let move = 0;
const playingField = document.querySelector('.field');
let result = ''
const squares = document.querySelectorAll('.square')
const actualResult = document.querySelector('.actual-result')
let gameStatistic = []

const showSign = () => {
    playingField.addEventListener('click', (event) => {
     move % 2 == 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0'
     move++
     determineTheWinner()
     showActualResult(move, result)
     recordGameResults()
            
})


}

console.log(gameStatistic)

const recordGameResults = () => {
    if (result != '') {
   gameStatistic.length <= 9 ? gameStatistic.push(result) : gameStatistic.shift() & gameStatistic.push(result)
    }
}



const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]


console.log(squares)
console.log(winConditions[0][0])

const determineTheWinner = () => {

        for (i = 0; i < winConditions.length; i++){
            if ((squares[winConditions[i][0]].innerHTML == 'X') && (squares[winConditions[i][1]].innerHTML == 'X') && (squares[winConditions[i][2]].innerHTML == 'X')) {
                result = 'X win'
            } if (squares[winConditions[i][0]].innerHTML == '0' && squares[winConditions[i][1]].innerHTML == '0' && squares[winConditions[i][2]].innerHTML == '0') {
                result = '0 win'
            }
        }
    }

const showActualResult = (move, result) => {
    if (result != '') {
        actualResult.innerHTML = `${result} ${move+1} turn`
    } else {
        actualResult.innerHTML = `${move+1} turn`
    }


}

const setLocalStorage = () => {   
    localStorage.setItem('gameStatistic', JSON.stringify(gameStatistic))
}

window.addEventListener('beforeunload', setLocalStorage)


const getLocalStorage = () => {
    
    gameStatistic = JSON.parse(localStorage.getItem('gameStatistic'))
    
}

window.addEventListener('load', getLocalStorage)

showSign()