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
});

// faq-listフェードイン
$(function () {
    $('.faq-list-item-box').click(function () {
            $(this).toggleClass('open');
            $(this).next('.answer').slideToggle();
        });
});
// faq-list　img 回転
$(function () {
    $('.faq-list-item-box').click(function () {
        $(this).children('p').toggleClass('action');
        if ($(this).hasClass('action')) {
            $(this).find('.faq-list-item-box p').addClass('action');
        } else {
            $(this).find('.faq-list-item-box p').removeClass('action');
        }
    });
});
