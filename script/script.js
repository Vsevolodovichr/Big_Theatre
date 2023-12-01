'use strict'

// mobile menu
  const hamburger = document.querySelector('.headline__hamburger'),
        sidepanel = document.querySelector('.fixed-panel'),
        closeSidepanel = document.querySelector('.fixed-panel__close');

  function openMenu() {
    sidepanel.classList.add('fixed-panel_active');
  }

  function closeMenu() {
    sidepanel.classList.remove('fixed-panel_active');
  }

  hamburger.addEventListener('click', openMenu);
  closeSidepanel.addEventListener('click', closeMenu);

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  effect: 'coverflow'
  // Navigation arrows
  navigation: {
    nextEl: '.slider__btn_next',
    prevEl: '.slider__btn_prev',
  },

});
 
  sliderPartners();

  window.addEventListener('resize', sliderPartners);