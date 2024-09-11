//section1 조채림
let video = $('#hdvideo');
let playBtn = $('#play');
let pauseBtn = $('#stop');
let playPauseBtn = $('.video_btn button');
let progressBar = $('#progress');
let vcontrols = $('#controls');
let bar = $('.progress .bar');

playPauseBtn.click(function(){
  if(video.get(0).paused){
    video.get(0).play();
    playPauseBtn.html('<i class="fa-solid fa-pause fa-2x"></i>');
  }else{
    video.get(0).pause();
    playPauseBtn.html('<i class="fa-solid fa-play fa-2x"></i>');
  }
});
let timer = setInterval(()=>{
  const duration = video.get(0).duration;

  let ct = video.get(0).currentTime;
  let percent = ct/duration*100;
  bar.css('width',percent + '%');
  if(percent === 100){
    clearInterval(timer);
  }
}, 400);
// //section1 조채림 끝

//section2


//section3 홍수진

$('.sec3_card').mouseenter(
  function () {
    $(this).css('background-image', function (_, current) {
      return current.replace('.jpg', '.gif');
    });
  });
$('.sec3_card').mouseleave(
  function () {
    $(this).css('background-image', function (_, current) {
      return current.replace('.gif', '.jpg');
    });
  }
);

//section3 홍수진 fin