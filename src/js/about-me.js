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

// ROTATE ICON SCROLL DOWN FUNCTION

const scrollHeader = document.querySelectorAll('.scroll-header');
const scrollBtn = document.querySelector('.scroll-button');

function rotateIconWhenScroll() {
  scrollHeader.forEach(scrollBtn => {
    const ariaExpanded = scrollBtn.getAttribute('aria-expanded');
    if (ariaExpanded === true) {
      scrollBtn.classList.add('rotate-icon');
    }
    button.classList.add('rotate-icon');
  });
}
scrollBtn.addEventListener('click', rotateIconWhenScroll);

// SWIPER INICIALISATION

new Swiper('.swiper-of-skills', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 0,
  modules: [Keyboard, Navigation],
  grabCursor: true,
  loop: true,
  noSwipingSelector: '.skills-swiper-button-next',
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
