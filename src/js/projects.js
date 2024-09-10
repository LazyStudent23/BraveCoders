import Swiper from 'swiper';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
} from 'swiper/modules';

const swiperBtnPrev = document.querySelector('.swiper-button-prev');
const swiperBtnNext = document.querySelector('.swiper-button-next');

new Swiper('section.projects-section .swiper', {
  // Install modules
  modules: [Navigation, Keyboard, Mousewheel, EffectCoverflow],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 32,
  speed: 500,
  effect: 'coverflow',

  on: {
    beforeInit: swiperBtnPrev.classList.add('is-inactive'),

    slideChange: checkSlideBorders,

    keyPress: onMyKeyPress,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: { enabled: true, onlyInViewport: true },

  mousewheel: {
    enabled: true,
  },

  edgeSwipeDetection: true,
  coverflowEffect: { depth: 300 },
});

function onMyKeyPress(swiper, keyCode) {
  switch (keyCode) {
    case 9: //Tab
      swiper.slideNext();
      break;
    case 8: //Backspace
      swiper.slidePrev();
      break;
  }
}

function checkSlideBorders(event) {
  if (event.isBeginning === true) {
    swiperBtnPrev.classList.add('is-inactive');
    return;
  }
  swiperBtnPrev.classList.remove('is-inactive');

  if (event.isEnd === true) {
    swiperBtnNext.classList.add('is-inactive');
    return;
  }
  swiperBtnNext.classList.remove('is-inactive');
}
