
// Get the swiper container element
const swiperContainer = document.querySelector('.swiper-container');

// Initialize the swiper
const swiper = new Swiper(swiperContainer, {
  // Set the direction of the swiper
  direction: 'horizontal',
  
  // Set the navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
