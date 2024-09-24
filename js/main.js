//section1 조채림
let video = $('#hdvideo');
let pauseBtn = $('#stop');
let playBtn = $('.play_btn');
let progressBar = $('#progress1');
let vcontrols = $('#controls');
let bar = $('.progress1 .bar');

playBtn.click(function () {
  if (video.get(0).paused) {
    video.get(0).play();
    // playPauseBtn.html('<i class="fa-solid fa-pause fa-2x"></i>');
  } else {
    video.get(0).pause();
    // playPauseBtn.html('<i class="fa-solid fa-play fa-2x"></i>');
  }
});

playBtn.click(function () {
  $(".play_contain").toggleClass("trigger");
});

let timer = setInterval(() => {
  const duration = video.get(0).duration;

  let ct = video.get(0).currentTime;
  let percent = ct / duration * 100;
  bar.css('width', percent + '%');
  if (percent === 100) {
    clearInterval(timer);
  }
}, 400);

// //section1 조채림 끝

// section2 조채림 

const imgs = $('.she_pic img');
const details = $('.details div');
const pagers = $('.pager a');

// pagers.click(function(e){
//   e.preventDefault();
//   let idx = $(this).index();
//   imgs.removeClass('active');
//   imgs.eq(idx).addClass('active');

//   details.removeClass('active');
//   details.eq(idx).addClass('active');
//   $(this).addClass('focus');
// }); 
pagers.mouseenter(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  imgs.removeClass('active');
  imgs.eq(idx).addClass('active');

  details.removeClass('active');
  details.eq(idx).addClass('active');

  pagers.css({ 'margin-bottom': '0px' });
  pagers.removeClass('focus');
  pagers.css({ 'margin-top': '28px' });

  $(this).addClass('focus');
  $(this).css({ 'margin-bottom': '28px' });
  $(this).css({ 'margin-top': '0px' });
});

AOS.init({
  duration: 1000,
})




$(window).resize(function () {
  if ($(window).width() < 768) {
    $('.tab-wrapper').slick();
  } else {
    $('.tab-wrapper').slick('unslick');
  }

})
$(window).trigger('resize');