document.addEventListener('DOMContentLoaded', function() {
  const marqueeline = document.querySelectorAll('.marquee__line');
  const marqueeSection = document.getElementById('covers');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        marqueeline.forEach(item => {
          item.classList.add("animate"); // Запуск анимации
        });
      } else {
        marqueeline.forEach(item => {
          item.classList.remove("animate"); // Пауза анимации
        });
      }
    });
  });

  observer.observe(marqueeSection);
});
