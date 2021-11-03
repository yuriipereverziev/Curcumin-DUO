const Slider = (function () {
  "use strict";
  const reviewsSlider = $(".js-reviews-slider");
  const btnShowComment = $(".js-show-comment");
  const textComment = $(".js-comment");
  const starRating = $(".js-star");
  return {
    initReviewsSlider: function () {
      reviewsSlider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              arrows: true,
            },
          },
        ],
      });
      reviewsSlider.on("beforeChange", function () {
        textComment.removeClass("active");
        btnShowComment.removeClass("active");
      });
    },
    showComment: function () {
      btnShowComment.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        _this.siblings(".js-comment").toggleClass("active");
        _this.toggleClass("active");
      });
    },
    addRating: function addRating() {
      starRating.click(function (e) {
        e.preventDefault();

        var _this = $(this);

        var countStar = _this.data("value");

        var removed = starRating.slice(0, +countStar);
        starRating.removeClass("selected");
        removed.addClass("selected");
      });
    },
    hoverStarRating: function hoverStarRating() {
      starRating
        .mouseover(function () {
          var _this = $(this);

          var countStar = _this.data("value");

          var removed = starRating.slice(0, +countStar);
          starRating.removeClass("hover");
          removed.addClass("hover");
        })
        .mouseout(function () {
          starRating.removeClass("hover");
        });
    },
    init: function () {
      Slider.initReviewsSlider();
      Slider.showComment();
      Slider.hoverStarRating();
      Slider.addRating();
    },
  };
})();

export default Slider;
