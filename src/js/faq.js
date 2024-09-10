const container = document.querySelector('.accordion-container');

const accordion = new Accordion('.accordion', {
  duration: 500,
  showMultiple: false,
  openOnInit: [],
  elementClass: 'accordion-item',
  triggerClass: 'btn-svg-opn',
  panelClass: 'accordion-content',
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
