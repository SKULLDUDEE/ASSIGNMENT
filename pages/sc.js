// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
const swiper = new Swiper('.recommendations-1 .swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
  },
 
});
