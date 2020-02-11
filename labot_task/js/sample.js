$(function () {
    $('.news-hoover').hover(
        function () {
            $('.img-hover').fadeIn();
        },
        function () {
            $('.img-hover').fadeOut();
        });
});




// header
    $(function () {
        $('.navToggle').click(function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $('.header-menu').addClass('active');
            } else {
                $('.header-menu').removeClass('active');
            }
        });
    });
