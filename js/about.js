topNav=document.querySelector('.top_nav')
toggleBtn = $('.hamburger_button');


topNav.addEventListener('mouseenter', () => {
if (window.innerWidth > 982) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid white';
  topNav.style.height = '420px';
}

});
topNav.addEventListener('mouseenter', () => {
if (window.innerWidth < 576) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid white';
  topNav.style.height = '88px';
}
});

topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth > 982) {
   topNav.style.backgroundColor = 'white';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '88px';
 }
});
topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth < 576) {
   topNav.style.backgroundColor = 'white';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '88px';
 }
});


toggleBtn.click(function(){
  toggleBtn.toggleClass('toggle');
  $('.tb_container').toggleClass('visible');
})
//퀵메뉴
$('.fixed-action-btn').floatingActionButton({
  hoverEnabled: false,
});

$('.fixed-action-btn>a').click(function(){
if($(this).find('i').text() === 'add'){
  $(this).find('i').text('close') 
}else{
  $(this).find('i').text('add') 
}
})

 // 모든 li 요소를 가져옴
  const navItems = document.querySelectorAll('.tb_nav ul > li > a');

  navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function(e) {
      e.preventDefault(); // 기본 링크 클릭 동작 방지

      // 클릭한 요소의 부모(li)의 자식 ul(tb_list)를 찾음
      const subMenu = this.nextElementSibling;

      // 다른 열려있는 메뉴는 닫음
      document.querySelectorAll('.tb_list').forEach(function(list) {
        if (list !== subMenu) {
          list.classList.remove('open');
        }
      });

      // 해당 메뉴를 토글
      if (subMenu && subMenu.classList.contains('tb_list')) {
        subMenu.classList.toggle('open');
      }
    });
  });

  // top 버튼
  topBtn = $('#top_btn');
  $(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#top_btn').fadeIn(200);
		} else {
			$('#top_btn').fadeOut(200);
		}
	});
  topBtn.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 100)
  })


//고로 슬라이드

document.addEventListener('DOMContentLoaded', function () {
  let tabSliders = document.querySelectorAll('.gotab-content-slider');

  tabSliders.forEach(function (slider, index) {
    let mySwiper = new Swiper(slider, {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true, 
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false   
      }
    });
  });

  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelector('.tab.active').classList.remove('active');
      this.classList.add('active');
      let targetSliderId = this.getAttribute('data-tab');
      tabSliders.forEach(function (slider) {
        slider.style.display = slider.getAttribute('data-slider') === targetSliderId ? 'block' : 'none';
        if (slider.style.display === 'block') {
          slider.swiper.update(); // 현재 보여지는 슬라이드에 대해서만 업데이트
        }
      });
    });
  });
});

////고로슬라이드///////////////////////////////////////////////////////////////