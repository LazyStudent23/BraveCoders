import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');

const accordionExample = new Accordion('.accordion', {
  duration: 800,  
  showMultiple: false,  
  openOnInit: [],  
  elementClass: 'accordion-item',  
  triggerClass: 'btn-svg-opn',  
  panelClass: 'accordion-content',
  easing: 'ease-in-out',
});

const faqButtons = document.querySelectorAll('.btn-svg-opn');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    faqButtons.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('rotate');
      }
    });

    button.classList.toggle('rotate');
  });
});
