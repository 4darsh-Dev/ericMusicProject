var allSongs = ["Excuses - Ap Dhillon.mp3", 'Pasoori - Shae Gill.mp3',"Arabic Kuthu.mp3","Kitni Haseen Hogi.mp3","Otnicka Where are you.mp3","Titliaan Warga.mp3","Tum Hi Ho.mp3","Zaroori tha.mp3" ]
var mySound = document.querySelector('#audio1');
 var pPause = document.querySelector('#play-pause');
let songIndex = 0;

//    var song = allSongs[songIndex]
let playing = true;
function playPause() {

if(playing){
    //Music and change the image
    mySound.play();
    pPause.src = "/img/pausebtn.png"
    playing = false;
}
else{
    mySound.pause();
    pPause.src = "/img/playbtn.png"
    playing = true;
}

}

mySound.addEventListener('ended', function(){
    nextSong()
});

function nextSong(){
    songIndex++;
    if(songIndex> allSongs.length -1){
        songIndex = 0;
    };
    mySound.src = allSongs[songIndex];
    playing = true;
    playPause();



}
function previousSong(){
    songIndex--;
    if(songIndex<0){
        songIndex = allSongs.length - 1 ;
    };
    mySound.src = allSongs[songIndex];
    playing = true;
    playPause();
}


