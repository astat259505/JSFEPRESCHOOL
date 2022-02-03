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
 const pixels = (audio.currentTime / audio.duration) * 380
 progressBar.style.left = `${pixels}px`
 timeline.style.background = `linear-gradient(to right, #402C19 ${pixels}px, #9B9183 ${pixels + 10}px )`
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


const playList = [ ['assets/audio/WalkingOnADream.mp3', 'assets/img/walkingOnADream.jpg', 'Empire Of The Sun', 'Walking On A Dream'],
['assets/audio/TheModel.mp3', 'assets/img/theManMachine.jpg', 'Kraftwerk', 'The Model'],
['assets/audio/BrooklynBridgeToChorus.mp3', 'assets/img/theNewAbnormal.jpg', 'The Strokes', 'Brooklyn Bridge To Chorus']]


const songPicture = document.querySelector('.song-picture');
const artistName = document.querySelector('.artist-name');
const songName = document.querySelector('.song-name');
const background = document.querySelector('.container')
const footer = document.querySelector('.footer-container')



let playNum = 0;

const playNext = () => {
playNum = playNum + 1
if (playNum <= playList.length - 1) {

    audio.src = playList[playNum][0]
    songPicture.src = playList[playNum][1]
    background.style.backgroundImage = `url(${playList[playNum][1]})`
    artistName.textContent = playList[playNum][2]
    songName.textContent = playList[playNum][3]

}  else if (playNum >= playList.length) {

    audio.src = playList[0][0]
    songPicture.src = playList[0][1]
    background.style.backgroundImage = `url(${playList[0][1]})`
    artistName.textContent = playList[0][2]
    songName.textContent = playList[0][3]

    playNum = 0
}
playBtn.classList.add('pause')
audio.play()


}

const playPrev = () => {
    playNum = playNum - 1
    if (playNum >= 0) {

        audio.src = playList[playNum][0]
        songPicture.src = playList[playNum][1]
        background.style.backgroundImage = `url(${playList[playNum][1]})`
        artistName.textContent = playList[playNum][2]
        songName.textContent = playList[playNum][3]
    }  else if (playNum < 0) {

        audio.src = playList[playList.length - 1][0]
        songPicture.src = playList[playList.length - 1][1]
        background.style.backgroundImage = `url(${playList[playList.length - 1][1]})`
        artistName.textContent = playList[playList.length - 1][2]
        songName.textContent = playList[playList.length - 1][3]
        playNum = playList.length - 1
    }

    
    playBtn.classList.add('pause')
    audio.play()

}




const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
    playNext()
})

const prevBtn = document.querySelector('.prev-btn')
prevBtn.addEventListener('click', () => {
    playPrev()

})

songDuration.textContent = timeInCorrectForm(audio.duration);
