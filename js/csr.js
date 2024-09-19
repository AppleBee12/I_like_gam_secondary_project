
  let $slides = $('.slides');
  let $slideItems = $('.slides li');
  let slideWidth = $slideItems.outerWidth(true); 
  let slideCount = $slideItems.length;
  let gap=10;
  let slideWrapper = $('.slide_wrapper');
  let symbolOST=$('.symbol').offset().top;
  console.log(symbolOST);
  topNav=document.querySelector('.top_nav')
  
  
  topNav.addEventListener('mouseenter', () => {
  if (window.innerWidth > 768) {
    topNav.style.backgroundColor = 'white';
    topNav.style.borderBottom = '1px solid black';
    topNav.style.height = '420px';
  }
  
  });
  topNav.addEventListener('mouseenter', () => {
  if (window.innerWidth < 576) {
    topNav.style.backgroundColor = 'white';
    topNav.style.borderBottom = '1px solid black';
    topNav.style.height = '87px';
  }
  });
  
  topNav.addEventListener('mouseleave', () => {
   if (window.innerWidth > 768) {
     topNav.style.backgroundColor = 'white';
     topNav.style.borderBottom = '1px solid black';
     topNav.style.height = '87px';
   }
  });
  topNav.addEventListener('mouseleave', () => {
   if (window.innerWidth < 576) {
     topNav.style.backgroundColor = 'white';
     topNav.style.borderBottom = '1px solid white';
     topNav.style.height = '87px';
   }
  });

  $slides.append($slideItems.clone());


  function infiniteSlide() {
      $slides.animate({ left: `-${slideWidth * slideCount+(gap*slideCount-1)}px` }, 10000, 'linear', function() {

          $slides.css('left', '0');

          infiniteSlide();
      });
  }

  infiniteSlide();


$slides.mouseenter(function(){
  $(this).stop(stop);
})
$slides.mouseleave(function(){
  infiniteSlide();
})

$(window).scroll(function(){
  if($(this).scrollTop()>symbolOST-1000){
    $('.sec3_title').addClass('active')
  }else{
    $('.sec3_title').removeClass('active');
  }
})

$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(1)').offset().top-900){
    $('.symbol_exam p:nth-child(1)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(1)').removeClass('active');
  }
})
$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(2)').offset().top-900){
    $('.symbol_exam p:nth-child(2)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(2)').removeClass('active');
  }
})
$(window).scroll(function(){
  if($(this).scrollTop()>$('.symbol_exam p:nth-child(3)').offset().top-900){
    $('.symbol_exam p:nth-child(3)').addClass('active')
  }else{
    $('.symbol_exam p:nth-child(3)').removeClass('active');
  }
})