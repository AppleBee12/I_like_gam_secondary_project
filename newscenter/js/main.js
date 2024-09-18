const slideBtn = $('.slide_btn');
const nextBtn = $('.swiper-button-next');
const prevBtn = $('.swiper-button-prev');


const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000
        
    },

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
