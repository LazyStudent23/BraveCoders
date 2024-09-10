import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container', {
  duration: 500,
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  showMultiple: true,
  openOnInit: [],
});

acc.open(0);

new Swiper('.swiper-of-skills', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 0,
  modules: [Keyboard, Navigation],
  grabCursor: true,
  loop: true,
  noSwipingSelector: '.skills-swiper-button-next',
  injectStyles: {
    position: absolute,
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: 0,
    padding: 0,
    whiteSpace: 'nowrap',
    clipPath: 'inset(100%)',
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
  },
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
