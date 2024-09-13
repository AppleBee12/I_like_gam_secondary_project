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

// section2 조채림 

const imgs = $('.she_pic img');
const details = $('.details div');
const pagers = $('.pager a');

pagers.click(function(e){
  e.preventDefault();
  let idx = $(this).index();
  imgs.removeClass('active');
  imgs.eq(idx).addClass('active');

  details.removeClass('active');
  details.eq(idx).addClass('active');
  $(this).addClass('focus');
  $(this).css({'margin-bottom':'28px'});
}); 

AOS.init({
  duration: 1000,
})



$(document).ready(function() {
  let currentIndex = 0;
  const tabs = $(".tab");

  function autoSwitchTab() {
      currentIndex = (currentIndex + 1) % tabs.length;
      switchTab(currentIndex);
  }

  // 초기화: 첫 번째 탭 활성화
  switchTab(currentIndex);

  // 일정 시간 간격으로 탭 자동 변경
  setInterval(autoSwitchTab, 3000); // 3000ms = 3초
});
// //section2 조채림 끝

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