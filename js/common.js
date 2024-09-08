const topNav = document.querySelector('.top_nav');


topNav.addEventListener('mouseenter', () => {
  if (window.innerWidth > 768) {
    topNav.style.backgroundColor = 'white';
    topNav.style.borderBottom = '1px solid black';
    topNav.style.height = '380px';
  }
});

topNav.addEventListener('mouseleave', () => {
  if (window.innerWidth > 768) {
    topNav.style.backgroundColor = 'transparent';
    topNav.style.borderBottom = '1px solid white';
    topNav.style.height = '';
  }
});