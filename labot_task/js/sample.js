// headerのはんばーがー
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


// index.htmlのhover
$(function () {
    $('#login-show').click(function () {
        $('#login-modal').fadeIn();
    });
    $('.signup-show').click(function () {
        $('#signup-modal').fadeIn();
    });
    $('.close-modal').click(function () {
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
    });
    $('.lesson-hover').hover(
        function () {
            $(this).find('.text-contents').addClass('text-active');
        },
        function () {
            $(this).find('.text-contents').removeClass('text-active');
        }
    );


// inquiry.htmlのアコーディオン
    $('.faq-list-item').click(function () {
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.fadeIn();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.fadeOut();
            $(this).find('span').text('-');
        }
    });
});

// フェードインクリック、かいてん
$(function(){
    $('.faq-list-item-box').click(function(){
        $(this).toggleClass("faq-list-item-box img");
    });
});