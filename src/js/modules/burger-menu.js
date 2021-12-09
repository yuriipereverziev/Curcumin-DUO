export default function () {

    let ham = document.querySelector('.burger');
    let nav = document.querySelector('.header__menu');

    ham.addEventListener('click', function () {
        nav.classList.toggle('active');
        activateBurger()
    })

    function activateBurger() {

        document.querySelector('.burger-top').classList.toggle('burger-top-click');
        document.querySelector('.burger-middle').classList.toggle('burger-middle-click');
        document.querySelector('.burger-bottom').classList.toggle('burger-bottom-click');
    }
};


