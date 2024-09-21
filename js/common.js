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
})
  // 퀵메뉴 버튼 클릭 이벤트
  $('.quick-menu-btn').click(function() {
    $('.quick-menu-list').slideToggle(300); // 메뉴 슬라이드 토글
    $('.quick-menu-list a+a').toggleClass('active')
    $('.quick-menu-btn').toggleClass('active')
  });



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


  spanPlus= $('.tb_nav ul > li > a');

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


