$(function () {
    $('.news-hoover').hover(
        function () {
            $('.img-hover').fadeIn();
        },
        function () {
            $('.img-hover').fadeOut();
        });
});