//导航
    var isIE6 = !-[1, ] && !window.XMLHttpRequest;
    if (!isIE6) {
        $(window).scroll(function () {
            var scroH = $(window).scrollTop();
            if (scroH >= 300) {
                $('.navigation').removeClass('fix').addClass('absolute');
            } else {
                $('.navigation').removeClass('absolute').addClass('fix');
            }
        })
    } else {}
