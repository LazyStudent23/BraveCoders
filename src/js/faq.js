import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');

const accordion = new Accordion('.accordion', {
    openOnInit: [],  
    showMultiple: false,  
    duration: 500,  
    easing: 'ease-in-out',
    triggerClass: 'btn-svg-opn', 
    panelClass: 'accordion-content',  
    elementClass: 'accordion-item', 
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