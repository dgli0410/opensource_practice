$(document).ready(function(){

    // menu //
    $(".menu").on("click", function(){
        $('.mlnb').css({
            width:'100%',
            height:'100%'
        });
    });

    $("i").on("click", function(){
        $('.mlnb').css({
            width:'0'
        });
    });

    $(".mlnb li").click(function(){
        $(".mlnb").css({
            width:'0'
        });
    });
    // menu //

    // fullpage //
    $('#fullpage').fullpage({
        sectionSelector: '.section',
        scrollOverflow: true,
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage'],
        navigation: true,
        navigationTooltips: ['Intro', 'About', 'Portfolio', 'Guest Book', 'Contact'],
        slidesNavigation: true,
        menu: '#menu',
    });
    // fullpage //

    // 클립보드 복사 //
    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }

    $('.cInfo01 span').click(function() {
        copyToClipboard('thdek13@hanmail.net');
        alert('클립보드로 복사되었습니다.');
    });

    $('.cInfo02 span').click(function() {
        copyToClipboard('jeong1233');
        alert('클립보드로 복사되었습니다.');
    });

    $('.cInfo03 span').click(function() {
        copyToClipboard('http://jeong1233.dothome.co.kr/portfolio');
        alert('클립보드로 복사되었습니다.');
    });
    // 클립보드 복사 //
});
