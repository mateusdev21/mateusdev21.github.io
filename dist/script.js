
window.onscroll = function () {
    const header = document.querySelector('header')
    const header_position = header.offsetTop;

    if (window.pageYOffset > header_position) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});