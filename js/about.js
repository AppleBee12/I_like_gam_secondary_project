document.addEventListener('DOMContentLoaded', function() {
  const tabList = document.querySelectorAll('.tab_menu2 .list li');
  
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.btn').addEventListener('click', function(e) {
      e.preventDefault();
      
      // 모든 탭에서 'is_on' 클래스 제거
      for (let j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove('is_on');
        tabList[j].querySelector('.cont').style.display = 'none'; // 내용 숨기기
      }
      
      // 현재 클릭한 탭에 'is_on' 클래스 추가
      this.parentNode.classList.add('is_on');
      this.parentNode.querySelector('.cont').style.display = 'block'; // 내용 보이기
    });
  }
});

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


/* tab_menu2*/

/*// tab_menu2*/

  const tabList = document.querySelectorAll('.tab_menu2 .list li');
  
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.btn').addEventListener('click', function(e) {
      e.preventDefault();
      
      // 모든 탭에서 'is_on' 클래스 제거
      for (let j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove('is_on');
        tabList[j].querySelector('.cont').style.display = 'none'; // 내용 숨기기
      }
      
      // 현재 클릭한 탭에 'is_on' 클래스 추가
      this.parentNode.classList.add('is_on');
      this.parentNode.querySelector('.cont').style.display = 'block'; // 내용 보이기
    });
  }
