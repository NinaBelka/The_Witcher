const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
    }
  }

});


const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})



