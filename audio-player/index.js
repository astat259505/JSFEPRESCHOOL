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

audio.addEventListener('durationchange', () => {
    songDuration.textContent = timeInCorrectForm(audio.duration);
})

audio.addEventListener('ended', () => [
    playNext()
])




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
    let minutes = String(parseInt(seconds / 60))
    seconds = (String(seconds - (minutes * 60))).padStart(2, 0);
    return `${minutes}:${seconds}`;
}


const playList = ['assets/audio/beyonce.mp3', 'assets/audio/dontstartnow.mp3']
const songImage = ['assets/img.lemonade.png', 'assets/img.dontstartnow.png']
const artistName = ['Beyonce', 'Dua Lipa']
const songName = ['Don`t Hurt Yourself', 'Don`t Start Now']

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
playBtn.classList.add('pause')

}

const playPrev = () => {
    playNum = playNum - 1
    if (playNum >= 0) {
        audio.src = playList[playNum]
    }  else if (playNum < 0) {
        audio.src = playList[playList.length - 1]
        playNum = playList.length - 1
    }
    PlayAudio()
    playBtn.classList.add('pause')
    
}


const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
    playNext()
})

const prevBtn = document.querySelector('.prev-btn')
prevBtn.addEventListener('click', () => {
    playPrev()

})

