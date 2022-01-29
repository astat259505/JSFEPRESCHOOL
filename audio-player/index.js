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


let playNum = 0;


const progressBar = document.querySelector('.progress-bar');
const timeline = document.querySelector('.timeline')

const progressBarMove = () => {
 const pixels = (audio.currentTime / audio.duration) * 294
 progressBar.style.left = `${pixels}px`
}

audio.addEventListener('timeupdate', progressBarMove);


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
