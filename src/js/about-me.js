import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.scroll-to-read', {
  duration: 400,
  elementClass: 'accordion-item',
  triggerClass: 'scroll-button',
  panelClass: 'ac-panel',
  //   activeClass: 'el-name',
});

const swiper = new Swiper('.hard-skills', {
  speed: 400,
  spaceBetween: 100,
  autoHeight: true,
});
