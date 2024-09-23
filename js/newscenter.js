const slideBtn = $('.slide_btn');
const nextBtn = $('.swiper-button-next');
const prevBtn = $('.swiper-button-prev');


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 4000

    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});

nextBtn.mouseenter(function () {
    $('.swiper-button-next').addClass('active');
});
prevBtn.mouseenter(function () {
    $('.swiper-button-prev').addClass('active');
});
nextBtn.mouseleave(function () {
    $('.swiper-button-next').removeClass('active');
});
prevBtn.mouseleave(function () {
    $('.swiper-button-prev').removeClass('active');
});

const tab = $('.tab');
const tab_active = $('.tab.active');

$(function ($) {
    $(".tab-content").eq(0).show(0);
    $(".tabs .tab").click(function () {
        var idx = $(this).index();
        $(".tab-content").hide();
        $(".tab-content").eq(idx).show();
        $('.tab.active').removeClass('active');
        $(this).addClass('active');

    });
});

$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.tab-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,         
            autoplaySpeed: 4000,    
            infinite: true
        });
    } else {
        $('.tab-wrapper').slick('unslick');            
    }
});
$(window).trigger('resize');

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    $('.swiper-tab').off('mouseenter mouseleave');
}

const searchInput = $('input[type="search"]');
const tabList = $('.tab-wrapper');
const tabListItem = $('.swiper-tab');
const captions = $('.tab_title p:first-child');
const dnone = 'd-none';

console.log(captions);

const captionArr = [];
let counter = 0;
captions.each(function () {
    captionArr.push({
        id: counter++,
        text: $(this).text()  // jQuery의 .text() 메서드를 사용하여 텍스트를 가져옴
    });
});
console.log(captionArr);


searchInput.on('input', function () {
    let keywords = $(this).val();

    tabListItem.addClass(dnone);

    let filteredArr = captionArr.filter(caption => caption.text.includes(keywords));
    console.log(filteredArr);

    filteredArr.forEach(function (item) {
        $(tabListItem[item.id]).removeClass(dnone);
    });
});


