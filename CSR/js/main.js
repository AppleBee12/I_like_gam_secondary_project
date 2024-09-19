$(document).ready(function() {
  let $slides = $('.slides');
  let $slideItems = $('.slides li');
  let slideWidth = $slideItems.outerWidth(true); 
  let slideCount = $slideItems.length;
  let gap=10;
  let slideWrapper = $('.slide_wrapper')
  

  slideWrapper.css

  $slides.append($slideItems.clone());


  function infiniteSlide() {
      $slides.animate({ left: `-${slideWidth * slideCount+(gap*slideCount-1)}px` }, 10000, 'linear', function() {

          $slides.css('left', '0');

          infiniteSlide();
      });
  }

  infiniteSlide();
});