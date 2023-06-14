$(document).ready(function() {
    $("#scrollToTop").click(function() {
        $("html").animate({ scrollTop: 0 }, 300);
    });

    $(".owl-carousel").owlCarousel({
        loop: true, // 循環播放
        padding: 0, // 外距 10px
        margin: 20,
        nav: false, // 顯示點點
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,


        responsive: {
            0: {
                items: 1 // 螢幕大小為 0~600 顯示 1 個項目
            },
            600: {
                items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
            },
            1000: {
                items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
            }
        }
    });









});