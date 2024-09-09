topNav=document.querySelector('.top_nav')
//topNav = $('.top_nav');

/*
topNav.mouseenter(function(){
  if($(window).width > 834){
   topNav.css({
     backgroundColor:'white',
     borderBottom: '1px solid black',
     height:'380px'
  })
  }
});
*/
topNav.addEventListener('mouseenter', () => {
if (window.innerWidth > 834) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid black';
  topNav.style.height = '380px';
}
});
topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth > 834) {
   topNav.style.backgroundColor = 'transparent';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '';
 }
});



// 비디오
let video = document.getElementById('hdvideo');
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("stop");
let playPauseBtn = document.querySelector('.video_btn button')
let progressBar = document.getElementById('progress');

playPauseBtn.addEventListener('click', function() {

  if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>';
    } else {
      video.pause();
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>';
  }
});


