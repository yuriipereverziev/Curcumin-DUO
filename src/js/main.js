import './helpers/postDate';
import Slider from './modules/Slider';
import reviews from './modules/reviews';
import banner from './modules/banner';
import Controls from './modules/Controls';

function main() {
  Slider.init();
  reviews();
  banner();
  Controls.init();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
