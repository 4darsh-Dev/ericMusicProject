var allSongs = [ "TumSaathHo.mp3", "Lovely.mp3","MyFeelings.mp3","Kitni Haseen Hogi.mp3","Otnicka Where are you.mp3","Excuses - Ap Dhillon.mp3","Arabic Kuthu.mp3",'Pasoori - Shae Gill.mp3',"Titliaan Warga.mp3","Tum Hi Ho.mp3","Zaroori tha.mp3" ]
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

let menuList = document.getElementById("menuList");

        menuList.style.height = "0px";

        function toggleMenu(){

            if(menuList.style.height == "0px"){

                menuList.style.height = "80px";
                
            }
            else {
                
                menuList.style.height = "0px";
            }

        }

        let active = true;
        function openCloseBar() {

            if (active) {
                let elem = document.getElementById('search-li');
                elem.style.display = "inline-block"
                elem.style.visibility = 'visible';
                console.log('Clicked first time')
                active = false;


            }
            else {
                let elem = document.getElementById('search-li');
                elem.style.visibility = 'hidden';
                active = true;
                console.log('Clicked Second time')

            }
        }

