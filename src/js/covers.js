document.addEventListener("DOMContentLoaded", () => {
  const coversSection = document.querySelector('.covers-section');
  const marqueeLines = document.querySelectorAll('.marquee__line');

  const onIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        marqueeLines.forEach(line => line.classList.add('animate'));
      } else {
        marqueeLines.forEach(line => line.classList.remove('animate'));
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5 
  });

  observer.observe(coversSection);  
});
