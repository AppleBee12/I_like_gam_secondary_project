//swiper library
const bullet = ['프리미엄 건설용 강재 <i>H CORE</i>', '자동차 솔루션 <i>H SOLUTION</i>'];
const swiper = new Swiper('.swiper', {
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

//swiper library fin


