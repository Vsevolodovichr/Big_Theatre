document.querySelector('.second-button').addEventListener('click', function () {

  document.querySelector('.animated-icon2').classList.toggle('open');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    });
  });