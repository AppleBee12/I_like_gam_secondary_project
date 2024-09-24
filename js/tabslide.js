var tabslider = $('.tab-content > .tab-wrapper');  


var slickOptions = {        
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 4000,    
    infinite: true  
};    
$(window).on('load resize', function() {
    if ($(window).width() < 768) {        
        tabslider.not('.slick-initialized').slick(slickOptions);
    }else{
        tabslider.slick('unslick');
    }
});
