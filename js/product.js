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


//section02 swiper01

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



//section02 swiper02

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

const quaternarySwiper = new Swiper('.sec3swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.sec3_pager',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  //반응형
  breakpoints: {
    // >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      

    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
      autoplay: false,
      
    }
  },
});

//section03 swiper fin
