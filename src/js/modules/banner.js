export default function () {
    $(window).on("scroll resize", function () {
        hideBannerScroll(".x_order_form", ".footer",".attention") // сюда через запятую дописываем классы блоков, которые должны скрыть баннер
    });

    function hideBannerScroll() {
        const e = $(".banner"),
            t = $(".main-banner"),
            i = $(window).scrollTop(),
            o = i + $(window).height(),
            r = $(window).width();
        let n = 0;
        for (let e = 0; e < arguments.length; e++) $(arguments[e]).each(function (e, t) {
            let a = $(t).offset().top,
                c = a + $(t).outerHeight(),
                s = $(t).offset().left,
                l = s + $(t).width();
            a <= o && c >= i && s <= r && l >= 0 && (n += 1)
        });
        i <= 100 || n > 0 ? e.fadeOut() : e.fadeIn().css({
            bottom: t.outerHeight()
        })
    }
}

