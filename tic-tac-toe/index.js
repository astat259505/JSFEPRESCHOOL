let move = 0;
const playingField = document.querySelector('.field');
let result = ''
const squares = document.querySelectorAll('.square')
const actualResult = document.querySelector('.actual-result')
let gameStatistic = []
const statistics = document.querySelectorAll('.statistics-item')
const restartBtn = document.querySelector('.restart')
const field = document.querySelector('.field')

const gameProcess = () => {
    squares.forEach(square => {
        square.addEventListener('click', (event) => {
        if (move % 2 == 0) {
             event.target.innerHTML = 'X'
             move++
             event.target.style.pointerEvents = 'none'
        } else {
            event.target.innerHTML = '0'
             move++
             event.target.style.pointerEvents = 'none'
        }

     determineTheWinner()
     banClickAfterResult()
     showActualResult(move, result)
     recordGameResults()
     showGameStatistic()
     
            
})
    })
}




console.log(gameStatistic)

const recordGameResults = () => {
    if (result != '') {
   gameStatistic.length <= 9 ? gameStatistic.push(actualResult.innerHTML) : gameStatistic.shift() & gameStatistic.push(actualResult.innerHTML)
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

        for (i = 0; i < winConditions.length; ++i){
            if ((squares[winConditions[i][0]].innerHTML == 'X') && (squares[winConditions[i][1]].innerHTML == 'X') && (squares[winConditions[i][2]].innerHTML == 'X')) {
                result = 'X won'
                
            } if (squares[winConditions[i][0]].innerHTML == '0' && squares[winConditions[i][1]].innerHTML == '0' && squares[winConditions[i][2]].innerHTML == '0') {
                result = '0 won'
                
            } if (move == 9 && result == '') {
                result = 'Draw'
            }
        }
    }

const showActualResult = (move, result) => {
    if (result != '') {
        actualResult.innerHTML = `${result} - ${move} turn!`
    } if (result == 'Draw') {
        actualResult.innerHTML = `${result}!`
    
    } if (result == '') {
        actualResult.innerHTML = `${move+1} turn`
    }


}

const setLocalStorage = () => {   
    localStorage.setItem('gameStatistic', JSON.stringify(gameStatistic))
}

window.addEventListener('beforeunload', setLocalStorage)


const getLocalStorage = () => {
    
    gameStatistic = JSON.parse(localStorage.getItem('gameStatistic'))
    showGameStatistic()
    
}

window.addEventListener('load', getLocalStorage)

gameProcess()

const showGameStatistic = () => {
  statistics.forEach((item, index) => {
      item.innerHTML = `${index+1}. ${gameStatistic[index]}`
  })
}

const banClickAfterResult = () => {
    squares.forEach(square => {
    if (result != '') {
        square.style.pointerEvents = 'none'
    }
})
}


restartBtn.addEventListener('click', () => {
    location.reload()
})
