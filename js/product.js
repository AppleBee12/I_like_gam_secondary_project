//section01 swiper
const bullet = ['프리미엄 건설용 강재 <i>H CORE</i>', '자동차 솔루션 <i>H SOLUTION</i>'];
const primarySwiper = new Swiper('.sec1_swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000, 
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

// pagination
    pagination: {
      el: '.sec1_pager',
      clickable: true,
      bulletActiveClass : 'on',
      renderBullet: function(index, className){
        return '<h5 class="' + className + '"><span>' + (bullet[index]) + '</span></h5>';
      }
    },
   

// aria-current="true"
//반응형

    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 1,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 40
    //     }
    //   }
  });

//section01 swiper fin


//section02 swiper

const secondarySwiper = new Swiper('.sec2_swiper01', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 4000, 
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },

});



$('.sec2_swiper01').hover(function(){
  console.log('hover');
  secondarySwiper.pause(); 
}, function(){
  secondarySwiper.resume();
  
});


const tertiarySwiper = new Swiper('.sec2_swiper02', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 4000, 
    loop: true,
    
    autoplay: {
        reverseDirection: true,
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },

});

$('.sec2_swiper02 .swiper-slide').hover(function(){
  tertiarySwiper.autoplay.stop(); 
}, function(){
  tertiarySwiper.autoplay.start();
  
});



//section02 swiper fin


