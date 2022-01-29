let isPlay = false;

const audio = document.querySelector('audio');

const PlayAudio = () => {
    if (!isPlay) {
        audio.currentTime = 0;
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