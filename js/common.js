topNav=document.querySelector('.top_nav')
toggleBtn = $('.hamburger_button');


topNav.addEventListener('mouseenter', () => {
if (window.innerWidth > 768) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid white';
  topNav.style.height = '420px';
}

});
topNav.addEventListener('mouseenter', () => {
if (window.innerWidth < 576) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid black';
  topNav.style.height = '87px';
}
});

topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth > 768) {
   topNav.style.backgroundColor = 'transparent';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '87px';
 }
});
topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth < 576) {
   topNav.style.backgroundColor = 'transparent';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '87px';
 }
});
topNav.addEventListener('mouseleave', () => {
  if (topNav.classList.contains('bbb')) {
    topNav.style.borderBottom = '1px solid black';
  }
 });



toggleBtn.click(function(e){
  e.preventDefault();
  toggleBtn.toggleClass('toggle');
  $('.tb_container').toggleClass('visible');
  toggleBtn.toggleClass('visible');
  $('body').toggleClass('visible');
})

  // 퀵메뉴 버튼 클릭 이벤트
  $('.quick-menu-btn').click(function() {
    $('.quick-menu-list').stop().slideToggle(300); // 메뉴 슬라이드 토글
    $('.quick-menu-list a+a').toggleClass('active')
    $('.quick-menu-btn').toggleClass('active')
  });
 





 // 모든 li 요소를 가져옴
  const navItems = document.querySelectorAll('.tb_nav ul > li > p');

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


  spanPlus= $('.tb_nav ul > li > p');

  spanPlus.each(function(){
      spanPlus.click(function(){
      if(!$(this).hasClass('open')){
        spanPlus.removeClass('open')
        $(this).addClass('open')        
      }else{
        $(this).removeClass('open')
      }
    })    
  })
 

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




//subpage-상단 BG 텍스트 parallax효과 추가 홍수진

$(window).on('scroll', function () {
  let value = $(window).scrollTop();

  $('.sub_prx_txt').each(function () {
    $(this).css('margin-top', value * 1.5 + 'px');
  });
});

//subpage-상단 BG 텍스트 parallax효과 추가 홍수진 끝


$(window).scroll(function(){
  winScroll = $(this).scrollTop();
  height = $(document).height() - $(window).height();
  scrolled = (winScroll / height) * 100;
  $('#progress_bar').css('width', scrolled + '%');
})



$(document).ready(function() {
  // 페이지 로드 시 쿠키 확인하고 모달 보이기/숨기기
  if (getCookie('hideModal') !== 'true') {
      $('#popupModal').fadeIn(); // 쿠키가 없으면 모달 표시
  }

  // "오늘 하루 안보기" 버튼 클릭 시
  $('.cookie_btn').on('click', function() {
      setCookie('hideModal', 'true', 1); // 1일 동안 쿠키 설정
      $('#popupModal').fadeOut();
  });

  // "닫기" 버튼 클릭 시
  $('.close_btn').on('click', function() {
      $('#popupModal').fadeOut();
  });

  // 쿠키 설정 함수
  function setCookie(name, value, days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 쿠키 유효기간 설정
      let expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/"; // 쿠키 저장
  }

  // 쿠키 가져오기 함수
  function getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim();
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
});

const dt = $('#popup dt');


dt.click(function(){
  if ($(window).width() <= 768) {
    $(this).siblings('dd').slideToggle();
    $(this).parent().siblings('dl').find('dd').slideUp();
    // $(this).next().sibling('').slideUp();
  }
});
