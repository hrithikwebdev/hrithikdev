
let music = [
    {
        id: "music-1",
        name: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        img: "./images/letmedown_slowly.jpg",
        link: "./musicname/Let_me_down_slowly.mp3"
    },
    {
        id: "music-2",
        name: "Tere Hawaale",
        artist: "Arijit Singh",
        img: "./images/Tere_Hawaale.jpg",
        link: "./musicname/Tere_Hawaale.mp3"
    },
    {
        id: "music-3",
        name: "Shape Of You",
        artist: "Ed Sheeran",
        img: "./images/Shapeof_you.jpg",
        link: "./musicname/Shape_of_you.mp3"
    },
    {
        id: "music-4",
        name: "Safari",
        artist: "Serena",
        img: "./images/safari.jpg",
        link: "./musicname/Safari_song.mp3"
    },
    {
        id: "music-5",
        name: "Sugar & Brownies",
        artist: "Dharia",
        img: "./images/sugar_brownies.jpg",
        link: "./musicname/Sugar_brownies_song.mp3"
    },
    {
        id: "music-6",
        name: "Ek Raat",
        artist: "Vilen",
        img: "./images/ekraat.jpg",
        link: "./musicname/Ek_Raat.mp3"
    },
    {
        id: "music-7",
        name: "Humnava",
        artist: "Papon, Mithun",
        img: "./images/humnava.jpg",
        link: "./musicname/Humnava.mp3"
    },
    {
        id: "music-8",
        name: "Tu Hai Kahan",
        artist: "Usama Ali",
        img: "./images/WhatsApp Image 2024-01-07 at 6.39.13 PM.jpeg",
        link: "./musicname/Tu-Hai-Kahan_320(PaglaSongs).mp3"
    },

    {
        id: "music-9",
        name: "Tum Se Hi",
        artist: "Pritam, Mohit Chauhan",
        img: "./images/tum_se_hi.jpg",
        link: "./musicname/Tum_Se_Hi.mp3"
    },

    {
        id: "music-10",
        name: "Hamar Adhuri Kahani",
        artist: "Arijit Singh",
        img: "./images/Hamari-Adhuri-Kahani.jpg",
        link: "./musicname/hamari_adhuri_kahani.mp3"
    },

    {
        id: "music-11",
        name: "Saware",
        artist: "Arijit Singh",
        img: "./images/saware.jpeg",
        link: "./musicname/Saware.mp3"
    },

    {
        id: "music-12",
        name: "Live Fast - PUBGM",
        artist: "Alan Walker",
        img: "./images/LiveFast.webp",
        link: "./musicname/Live_Fast.mp3"
    },

];



const progress = document.getElementById('progress');
const song = document.getElementById('song');
const controlBtn = document.getElementById('controlBtn');
const song_img = document.querySelector('.song-img');
const musicName = document.querySelector('.musicName');
const singerName = document.querySelector('.singer');
const startTime = document.querySelector('.current-time');
const endTime = document.querySelector('.max-duration');


let musicIndex = 0;
window.addEventListener("load", function () {
    loadMusic(musicIndex);
})

function loadMusic(indexNum) {
    song_img.src = music[indexNum].img;
    song.src = music[indexNum].link;
    musicName.innerHTML = music[indexNum].name;
    singerName.innerHTML = music[indexNum].artist
}


song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;

    setInterval(() => {
        let min = Math.floor(song.duration / 60);
        let sec = Math.floor(song.duration % 60);
        let curMin = Math.floor(song.currentTime / 60);
        let curSec = Math.floor(song.currentTime % 60);

        if(sec < 10) {
            sec = "0" + sec;
        }
        if(curSec < 10){
            curSec = "0" + curSec;
        }
        if(min < 10) {
            min = "0" + min;
        }
        if(curMin < 10) {
            curMin = "0" + curMin;
        }

        let totalDuration = min + ":" + sec;
        startTime.innerHTML = curMin + ":" + curSec;
        if(song.duration){
            endTime.innerHTML = `${totalDuration}`;
        }

    },500);
}


function playPause() {
    if(controlBtn.classList.contains("fa-pause")){
        song.pause();
        controlBtn.classList.remove("fa-pause");
        controlBtn.classList.add("fa-play");
        song_img.classList.remove('rotate');
    }else{
        song.play();
        controlBtn.classList.add("fa-pause");
        controlBtn.classList.remove("fa-play");
        song_img.classList.add('rotate');
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime
    },500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    controlBtn.classList.add("fa-pause");
    controlBtn.classList.remove("fa-play");
}

const backMusic = () => {
    musicIndex--;
    if(musicIndex < 0){
        musicIndex = music.length -1;
        controlBtn.classList.add("fa-pause");
        controlBtn.classList.remove("fa-play");
    }
    loadMusic(musicIndex);
    controlBtn.classList.add("fa-pause");
    song.play();
}

const forwardMusic = () => {
    musicIndex++;
    if(musicIndex > music.length -1){
        musicIndex = 0;
        controlBtn.classList.add("fa-pause");
        controlBtn.classList.remove("fa-play");
    }
    loadMusic(musicIndex);
    controlBtn.classList.add("fa-pause");
    song.play();

}

song.addEventListener('ended', () => {
    forwardMusic();
    song.play();
    controlBtn.classList.add("fa-pause");
})


