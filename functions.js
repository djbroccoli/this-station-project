$(window).on('load',function(){
        $('#myModal').modal('show');
    });

//VARIABLES
//find title
/*var tit = document.querySelector('h1');
var blackFlag = document.querySelector('#black');
var bobShow = document.querySelector('#bob');
var bob1 = document.querySelector('#bob1');
var bob2 = document.querySelector('#bob2');
var bigBlack = document.getElementById('kerosene')*/
//array of span elements with triggers, each span element has a title the same as the id for the audio element
var songs = document.getElementsByName('song');


//FUNCTIONS
//takes inputs of two songs, first is one to be played, second is a song to stop playing
function play_song(song){
mutePage();
document.getElementById(song).play();
};

function  isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
  	bounding.top >= 0 &&
  	bounding.left >= 0 &&
  	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
  	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};



// Mute a singular HTML5 element
function pauseMe(elem) {
    elem.pause();
}

// Try to mute all video and audio elements on the page
function mutePage() {
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function(elem) { pauseMe(elem); });
}

function disableAudio() {
  var i;
  var j = songs.length;
  for (i=0; i<j; i++) {
    var eachSong = document.getElementById(songs[i].title);
    eachSong.muted = True;
  }
}
/*var songID = '#' + songs[1].id;
var checkSong = document.querySelector(songID);
var checkBounding = checkSong.getBoundingClientRect();
console.log(songID);
console.log(songs);
console.log(checkSong);
setInterval(function() {
  var checkBounding = checkSong.getBoundingClientRect();
  console.log(checkBounding);}, 2000);*/

//to use this function
setInterval(function(){
  var i;
  var j = songs.length;
  for (i=0; i<j; i++) {
    var currentSong = document.getElementById(songs[i].id);
    var getSong = songs[i].title;
    if (isInViewport(currentSong)) {
      play_song(getSong);
    }
  }
}, 1000);
