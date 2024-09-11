topNav=document.querySelector('.top_nav')
toggleBtn = $('.hamburger_button');
//topNav = $('.top_nav');

/*
topNav.mouseenter(function(){
  if($(window).width > 834){
   topNav.css({
     backgroundColor:'white',
     borderBottom: '1px solid black',
     height:'380px'
  })
  }
});
*/
topNav.addEventListener('mouseenter', () => {
if (window.innerWidth > 798) {
  topNav.style.backgroundColor = 'white';
  topNav.style.borderBottom = '1px solid black';
  topNav.style.height = '380px';
}
});
topNav.addEventListener('mouseleave', () => {
 if (window.innerWidth > 798) {
   topNav.style.backgroundColor = 'transparent';
   topNav.style.borderBottom = '1px solid white';
   topNav.style.height = '88px';
 }
});

NavBtn.click(function(){
  $('.tb_menu').css({display:'block'});
})
tbNavBtn.click(function(){
  $('.tb_menu').css({display:'none'});
})

toggleBtn.click(function(){
  toggleBtn.toggleClass('toggle');
  $('.tb_container').toggleClass('visible');
})








