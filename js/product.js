//section01 swiper
const bullet = ['프리미엄 건설용 강재 <i>H CORE</i>', '자동차 솔루션 <i>H SOLUTION</i>'];
const progressLine = document.querySelector(".autoplay-progress svg");
const progressButtlet = document.querySelector(".sec1_progress-box");
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
    pauseOnMouseEnter: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressLine.style.setProperty("--progress", 1 - progress);
      progressButtlet.style.setProperty("--progress", 1 - progress);
    }
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
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 3000,
  loop: true,
  preventInteractionOnTransition: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    // >= 250px
    250: {
      slidesPerView: 1,
      spaceBetween: 10,
      direction: 'horizontal',
      loop: true,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: 'vertical',
    },
  },
});

$('.sec2_swiper01').mouseenter(function () {
  secondarySwiper.autoplay.stop();
});
$('.sec2_swiper01').mouseleave(function () {
  secondarySwiper.autoplay.start();
});

$(window).on('resize', function() {
  secondarySwiper.update();
});


//section02 swiper02

const tertiarySwiper = new Swiper('.sec2_swiper02', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 3000,
  loop: true,
  preventInteractionOnTransition: false,

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
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },



  //반응형
  breakpoints: {
    // >= 0px
    250: {
      slidesPerView: 1,
      spaceBetween: 10,

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,

    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,

    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
      //autoplay: false, false로 진행시 
      //멈춰서 브라우저 사이즈가 조절되어도 다시 실행이 안되는 오류 발생

    }
  },
});



quaternarySwiper.on('resize', function() {


  if ($(window).width() > 1400) {  
    console.log('stop');
    quaternarySwiper.autoplay.stop();  


  } else {
    console.log('resume');
    quaternarySwiper.autoplay.start();  
  }


 });


 quaternarySwiper.autoplay.stop();  

//section03 swiper fin
