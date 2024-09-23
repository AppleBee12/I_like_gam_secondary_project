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
    bulletActiveClass: 'on',
    renderBullet: function (index, className) {
      return '<h5 class="' + className + '"><span>' + (bullet[index]) + '</span></h5>';
    }
  },

});

//section01 swiper fin


//section02 swiper

const secondarySwiper = new Swiper('.sec2_swiper01', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  preventInteractionOnTransition: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
});



$('.sec2_swiper01').mouseenter(function () {
  secondarySwiper.autoplay.stop();
});
$('.sec2_swiper01').mouseleave(function () {
  secondarySwiper.autoplay.start();
});

// const originalSpeed = secondarySwiper.params.speed;

// // hover 시 속도를 0으로 설정하고 즉시 멈추기
// $('.sec2_productlist01 .swiper-slide').hover(function() {
//     secondarySwiper.setTransition(0); // 속도 0으로 설정
//     secondarySwiper.autoplay.stop(); // 즉시 멈춤
// }, function() {
//     secondarySwiper.setTransition(originalSpeed); // 원래 속도로 복원
//     secondarySwiper.autoplay.start(); // 다시 시작
// });



const tertiarySwiper = new Swiper('.sec2_swiper02', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  preventInteractionOnTransition: true,

  autoplay: {
    reverseDirection: true,
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

});

$('.sec2_swiper02').mouseenter(function () {
  tertiarySwiper.autoplay.stop();
});
$('.sec2_swiper02').mouseleave(function () {
  tertiarySwiper.autoplay.start();
});




//section02 swiper fin

//section03 swiper

const quaternarySwiper = new Swiper('.sec3_swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 2000,
  loop: false,

  // aria-current="true"
  //반응형

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 1,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 40
  //   }
  // }
});

//section03 swiper fin
