let move = 0;
const playingField = document.querySelector('.field');

const showSign = () => {
    playingField.addEventListener('click', (event) => {
        if (move % 2 == 0) {
            event.target.innerHTML = 'X'
            move++
        } else {
            event.target.innerHTML = '0'
            move++
        }
    }) 
}

showSign()