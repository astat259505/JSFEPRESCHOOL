let isPlay = false;

const audio = document.querySelector('audio');

const PlayAudio = () => {
    if (!isPlay) {
        audio.play();
    } else {
        audio.pause();
    }
}

const playBtn = document.querySelector('.play-button');

const changePlaybackStatus = () => {
    playBtn.classList.toggle('pause');
    if (playBtn.classList.contains('pause')) {
        isPlay = false
    } else {
        isPlay = true
    }
}

playBtn.addEventListener('click', () => {
    changePlaybackStatus();
    PlayAudio();
}
);



const progressBar = document.querySelector('.progress-bar');
const timeline = document.querySelector('.timeline')

const progressBarMove = () => {
 const pixels = (audio.currentTime / audio.duration) * 294
 progressBar.style.left = `${pixels}px`
}

audio.addEventListener('timeupdate', () => {
    progressBarMove();
    currentTimer.textContent = timeInCorrectForm(audio.currentTime);
})


const progressBarMoveByUser = (event) => {
 const currentSongMoment = (event.offsetX / timeline.offsetWidth) * audio.duration;
 audio.currentTime = currentSongMoment;     
}

let isMousedown = false;
timeline.addEventListener('click', progressBarMoveByUser)
timeline.addEventListener('mousedown', () => isMousedown = true);
timeline.addEventListener('mouseup', () => isMousedown = false);
timeline.addEventListener('mousemove', () => {
    if (isMousedown) {
    progressBarMoveByUser()
    }
});

const currentTimer = document.querySelector('.current-song-time');
const songDuration = document.querySelector('.song-duration');


const timeInCorrectForm = (time) => {
    let seconds = parseInt(time);
    let minutes = parseInt(seconds / 60)
    seconds = (String(seconds - (minutes * 60))).padStart(2, 0);
    return `${minutes}:${seconds}`;
}



const playList = ['assets/audio/beyonce.mp3', 'assets/audio/dontstartnow.mp3']

let playNum = 0;

const playNext = () => {
playNum = playNum + 1
if (playNum <= playList.length - 1) {
    audio.src = playList[playNum]
}  else if (playNum >= playList.length) {
    audio.src = playList[0]
    playNum = 0
}
PlayAudio()
}


const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
    playNext()
    
})

songDuration.textContent = timeInCorrectForm(audio.duration);





