$(function () {
// header

    $('.navToggle').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-menu').addClass('active');
        } else {
            $('.header-menu').removeClass('active');
        }
    });

    $('.news-img-item').hover(
        function () {
            $(this).find('.hover-slide').slideDown();
        },
        function () {
            $(this).find('.hover-slide').slideUp();
        });
});
