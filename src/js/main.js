import './helpers/postDate';

import burger from './modules/burger-menu';
import reviews from './modules/reviews';
import footer from './modules/footer';
import banner from './modules/banner';


function main() {
    burger();
    reviews()
    footer();
    banner();
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
}
