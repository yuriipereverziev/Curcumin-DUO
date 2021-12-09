export default function () {
    var arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="17.969" height="15.97" viewBox="0 0 17.969 15.97"><path fill="currentColor" fill-rule="evenodd"  class="cls-1" d="M633.921,9375.24a0.874,0.874,0,0,1,1.219,0,0.77,0.77,0,0,1,0,1.13l-6.181,5.8h14.176a0.837,0.837,0,0,1,.865.8,0.847,0.847,0,0,1-.865.82H628.959l6.181,5.79a0.782,0.782,0,0,1,0,1.14,0.874,0.874,0,0,1-1.219,0l-7.644-7.17a0.78,0.78,0,0,1,0-1.14Z" transform="translate(-626.031 -9375)"/></svg>';

    $(".reviews__content").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev reviews__arrow reviews__arrow--prev">' + arrow + '</button>',
        nextArrow: '<button type="button" class="slick-next reviews__arrow reviews__arrow--next">' + arrow + '</button>',
        dotsClass: 'slick-dots reviews__dots',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".reviews__content").on("afterChange", function (event, slick, currentSlide) {
        $(this).find(".slick-slide.text-open").not(".slick-active").removeClass("text-open");
    });
    $(".reviews-text__btn").on("click", function () {
        this.parentElement.classList.toggle("text-open");
        console.log(this.parentElement)
        $(".reviews__content").find(".slick-slide.slick-active").height("auto");
        $(".reviews__content").find(".slick-list").height("auto");
    });

};
