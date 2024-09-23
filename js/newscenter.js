const slideBtn = $('.slide_btn');
const nextBtn = $('.swiper-button-next');
const prevBtn = $('.swiper-button-prev');


const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 4000
        
    // },

    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      }
});

nextBtn.mouseenter(function(){
    $('.swiper-button-next').addClass('active');
});
prevBtn.mouseenter(function(){
    $('.swiper-button-prev').addClass('active');
});
nextBtn.mouseleave(function(){
    $('.swiper-button-next').removeClass('active');
});
prevBtn.mouseleave(function(){
    $('.swiper-button-prev').removeClass('active');
});

const tab = $('.tab');
const tab_active = $('.tab.active');

$(function ($) {
    $(".tab-content").eq(0).show(0);
    $(".tabs .tab").click(function () {
      var idx = $(this).index();
      $(".tab-content").hide();
      $(".tab-content").eq(idx).show();
      $('.tab.active').removeClass('active');
      $(this).addClass('active');

    });
  }); 

  $(window).resize(function(){
    if($(window).width()<768){
        $('.tab-wrapper').slick({
            slidesToShow: 1,        
            slidesToScroll: 1,      
            // autoplay: true,         
            // autoplaySpeed: 4000,    
            infinite: true 
        });
    } else{
        $('.tab-wrapper').slick('unslick');            
    }
});
$(window).trigger('resize');

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // 터치 장치인 경우 호버 관련 클래스를 제거하여 호버 기능 비활성화
    $('.swiper-tab').off('mouseenter mouseleave');
}