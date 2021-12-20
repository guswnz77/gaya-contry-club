$(function () {
    $('.main_menu,.sub_bg').hover(function () {
        $('.sub_menu').stop().fadeIn(500);
        $('.sub_bg').stop().fadeIn(200);

    }, function () {
        $('.sub_menu').stop().fadeOut(300);
        $('.sub_bg').stop().fadeOut(300);

    });

    $('.notice_slide').bxSlider({
        auto: true,
        pause: 4000,
    });
})