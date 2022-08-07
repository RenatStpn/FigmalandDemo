let video =  document.querySelector(".video__play");
let button = document.querySelector(".button video");
function playVideo () {
    if (video.paused) {
        video.play();
        button.style.display = 'none';
      } else {
        video.pause();
      }
}

const burgerIcon = document.querySelector('.burger__menu');
const closeIcon = document.querySelector('.close__icon');
const mobileMenu = document.querySelector('.header__menu');
burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.add('opened');
});
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('opened');
});