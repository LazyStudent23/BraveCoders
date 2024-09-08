import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.scroll-to-read', {
  duration: 400,
  elementClass: 'accordion-item',
  triggerClass: 'scroll-button',
  panelClass: 'ac-panel',
  //   activeClass: 'el-name',
});

new Swiper('.hard-skills', {
  speed: 400,
  spaceBetween: 100,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.skills-swiper-button-next',
  },
});
