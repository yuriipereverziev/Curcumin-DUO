const Controls = (function () {
  "use strict";
  const linkToTarget = $(".js-scroll");

  return {
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const href = _this.attr("href");
        const target = $(href);

        const top = target.offset().top;
        $("html, body").animate(
          {
            scrollTop: top,
          },
          1000
        );
      });
    },
    init: function () {
      Controls.scrollToTarget();
    },
  };
})();

export default Controls;
