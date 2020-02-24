const navToggle = document.getElementById('navToggle');
const header_sp = document.getElementById('header-menu-sp');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active'); //ハンバーガーのアイコンの動き

    //以下menuが出る動き
    if(navToggle.classList.contains("active")){
        header_sp.classList.add('active');
    }else{
        header_sp.classList.remove('active');
    }
});

$(function () {
$('.news-img-item').hover(
    function () {
        $(this).find('.hover-slide').slideDown();
    },
    function () {
        $(this).find('.hover-slide').slideUp();
    });
});

