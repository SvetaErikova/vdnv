gsap.to('.opening .opening__anim .human', {
  x: '-30%', // Движение на 20% вправо
  ease: 'none',
  scrollTrigger: {
    trigger: '.opening__anim',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    markers: false
  }
});

gsap.to('.opening .opening__anim .cosmos', {
  filter: 'blur(10px)',
  ease: 'none',
  scrollTrigger: {
    trigger: '.opening__anim',
    start: '60% center',
    end: 'bottom center',
    scrub: true,
    markers: false
  }
});
gsap.to('.opening .opening__anim .text', {
  y: '50%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.opening__anim',
    start: '50% bottom',
    end: 'bottom top',
    scrub: true,
    markers: false
  }
});
gsap.to('.opening .opening__gallery_wrapper', {
  x: '-30%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.opening__gallery',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    markers: false
  }
});
document.querySelectorAll('.opening__info .text, .opening__info div p').forEach((textElement) => {
  gsap.fromTo(textElement,
    {
      y: 50, // Начальное смещение вниз
      opacity: 0.7 // Начальная прозрачность
    },
    {
      y: -30, // Конечное смещение вверх
      opacity: 1, // Конечная прозрачность
      ease: 'none',
      scrollTrigger: {
        trigger: textElement.closest('.wrapper'), // Триггер - родительский wrapper
        start: 'top 80%', // Старт анимации когда элемент на 80% в viewport
        end: 'bottom 20%', // Конец анимации
        scrub: 1, // Плавное следование за скроллом
        markers: false // Маркеры для отладки (true для разработки)
      }
    }
  );
});

