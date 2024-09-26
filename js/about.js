



/* tab_menu2*/
const tabMenu = $('.tab-menu a');
const tabContents = $('#tab-content > div');

tabMenu.click(function(e){
	e.preventDefault();
	tabMenu.removeClass('active');
	$(this).addClass('active');

	tabContents.removeClass('active');

	let target = $(this).attr('href'); 
	console.log(target);

	$(target).addClass('active');

});

/*// tab_menu2*/  





/*winwin */
let lastScrollTop = 0; // 마지막 스크롤 위치

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('.winwin h2');
    const box1 = document.querySelector('.box1');
    const boxContainer = document.querySelector('.boxcontainer');
    const h2Position = h2.getBoundingClientRect().top;
    const boxPosition = boxContainer.getBoundingClientRect().top;

    // 스크롤을 내릴 때 h2와 boxContainer가 뷰포트 상단에 도달했을 때
    if (window.scrollY > lastScrollTop) {
        if (h2Position <= window.innerHeight) {
            h2.classList.add('active');
        }
        if (boxPosition <= window.innerHeight) {
            box1.classList.add('active');
            boxContainer.classList.add('active');
        }
    } else if (window.scrollY < lastScrollTop) {
        h2.classList.remove('active');
        box1.classList.remove('active');
        boxContainer.classList.remove('active');
    }

    lastScrollTop = window.scrollY;
});
/*winwin /////////////////////////////////////////////*/

/*연혁 슬라이드 */
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*연혁 슬라이드/////////////////////////////////////////////////*/


AOS.init({
  duration: 1200,
});



const tabs = document.querySelectorAll('.tab_menu ul li a'); 
const sections = document.querySelectorAll('section'); 

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // 
        const sectionHeight = section.clientHeight; // 

       
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id'); 
        }
    });

    // 각 탭에 active 클래스 추가/제거
    tabs.forEach(tab => {
        tab.classList.remove('active'); // 모든 탭에서 active 클래스 제거
        if (tab.getAttribute('href') === `#${current}`) {
            tab.classList.add('active'); // 현재 섹션에 해당하는 탭에 active 클래스 추가
        }
    });
});

$(window).resize(function(){
    if($(window).width() < 480){
    swiper.destroy(); //
    } else{
    swiper.init();
}
});

