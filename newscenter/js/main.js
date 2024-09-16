const slideBtn = $('.slide_btn');
const nextBtn = $('.swiper-button-next');
const prevBtn = $('.swiper-button-prev');


const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
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
