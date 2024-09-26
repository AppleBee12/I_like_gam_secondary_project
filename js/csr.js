
  let slides = $('.slides');
  let slideItems = $('.slides li');
  let slideWidth = slideItems.outerWidth(true); 
  let slideCount = slideItems.length;
  let gap=10;
  let slideWrapper = $('.slide_wrapper');
  let symbolOST=$('.symbol').offset().top;
  console.log(symbolOST);
  let totalSlideWidth = slideWidth * slideCount + (gap * (slideCount));
  let currentLeft = 0; // 현재 슬라이드의 left 값
  let slideSpeed = 1; // 슬라이드 속도 (값을 조정하여 속도를 설정)
  

  

   slides.append(slideItems.clone());


function slideMove() {
  currentLeft -= slideSpeed; // 슬라이드를 왼쪽으로 이동
  if (Math.abs(currentLeft) >= totalSlideWidth) {
      currentLeft = 0; // 모든 슬라이드가 지나가면 처음으로 리셋
  }
  slides.css('left', `${currentLeft}px`); // 슬라이드 위치 설정
}

// 일정 시간마다 slideMove 실행
let slideInterval = setInterval(slideMove, 15); // 10ms마다 슬라이드 이동

// 슬라이드에 마우스를 올리면 슬라이드를 멈추고, 벗어나면 다시 시작
slides.mouseenter(function(){
  clearInterval(slideInterval);// 슬라이드 멈춤
})
slides.mouseleave(function(){
  slideInterval = setInterval(slideMove, 15); // 슬라이드 재시작
})


slideMove();



$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(1)').offset().top-900){
    $('.symbol_exam p:nth-child(1)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(1)').removeClass('active');
  }
})
$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(1)').offset().top-900){
    $('.symbol_exam p:nth-child(2)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(2)').removeClass('active');
  }
})
$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(1)').offset().top-900){
    $('.symbol_exam p:nth-child(3)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(3)').removeClass('active');
  }
})


