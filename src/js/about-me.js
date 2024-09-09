// Обработчик для аккордеона
document.querySelectorAll('.accordion-container').forEach(container => {
  container.addEventListener('click', function () {
      const panel = this.nextElementSibling;

      // Закрыть все панели кроме текущей
      document.querySelectorAll('.ac-panel').forEach(p => {
          if (p !== panel) {
              p.classList.remove('active');
              p.previousElementSibling.querySelector('svg').classList.remove('rotate');
          }
      });

      // Открыть/закрыть текущую панель
      panel.classList.toggle('active');

      // Повернуть стрелку
      const svg = this.querySelector('svg');
      svg.classList.toggle('rotate');
  });
});
