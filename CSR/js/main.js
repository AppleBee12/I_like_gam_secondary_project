$(document).ready(function() {
  let $slides = $('.slides');
  let $slideItems = $('.slides li');
  let slideWidth = $slideItems.outerWidth(true); // 슬라이드의 너비(마진 포함)
  let slideCount = $slideItems.length;
  let gap=10;
  let slideWrapper = $('.slide_wrapper')
  

  slideWrapper.css
  // 복사본 생성: 슬라이드 리스트의 복사본을 만들어 슬라이드 끝에 추가
  $slides.append($slideItems.clone());

  // 무한 슬라이드 함수
  function infiniteSlide() {
      $slides.animate({ left: `-${slideWidth * slideCount+(gap*slideCount-1)}px` }, 10000, 'linear', function() {
          // 복사된 슬라이드로 넘겼으면 원래 슬라이드 위치로 돌아옴
          $slides.css('left', '0');
          // 다시 슬라이드 시작
          infiniteSlide();
      });
  }

  // 슬라이드 시작
  infiniteSlide();
});