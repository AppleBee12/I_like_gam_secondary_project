//swiper library

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

// pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   renderBullet: function(index, className){
    //     const titles = ['프리미엄 건설용 강재 H Core', '자동차 솔루션 H-SOLUTION'];
    //     return '<div class="' + pager + '"><h5>' + titles[ index + 1] + '</h5><div>'
    //   }
    },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

// aria-current="true"
//반응형

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
  });

//swiper library fin


