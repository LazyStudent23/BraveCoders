import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// Обработчик для аккордеона
// document.querySelectorAll('.accordion-container').forEach(container => {
//   container.addEventListener('click', function () {
//     const panel = this.nextElementSibling;
//     // Закрыть все панели кроме текущей
//     document.querySelectorAll('.ac-panel').forEach(p => {
//       if (p !== panel) {
//         p.classList.remove('active');
//         p.previousElementSibling.querySelector('svg').classList.remove('rotate');
//       }
//     });

//     // Открыть/закрыть текущую панель
//     panel.classList.toggle('active');

//     // Повернуть стрелку
//     const svg = this.querySelector('svg');
//     svg.classList.toggle('rotate');
//   })
// });
  const scrollBtn = document.querySelector('.scroll-button');

  const acc = new Accordion('.scroll-to-read', {
    duration: 500,
    elementClass: 'scroll-accordion-item',
    triggerClass: 'scroll-button',
    panelClass: 'ac-panel',
    showMultiple: true,
    openOnInit: [],
    // onclose: scrollBtn => {
    //   scrollBtn.classList.toggle('rotate');
    // },
  });

  acc.open(0);

const swiper = new Swiper('.swapper-of-skills', {
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
