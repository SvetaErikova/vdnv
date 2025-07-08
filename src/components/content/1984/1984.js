gsap.to('.cosmonautics .horizontal .anim-rotate',  {

  rotate: '15%',
  translate: '7% 1%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.cosmonautics .horizontal',
    start: 'top bottom',
    end: '90% bottom ',
    scrub: true,
    markers: true
  }
});



function initHorizontalScroll() {
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".horizontal__slides");

  // Устанавливаем ширину контейнера слайдов
  gsap.set(slidesContainer, {
    width: `${slides.length * 100}vw`
  });

  // Создаем анимацию горизонтального движения
  const horizontalScroll = gsap.to(slidesContainer, {
    x: () => -((slides.length - 1) * window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal__wrapper",
      pin: true,
      scrub: 1,
      end: () => `${slides.length * 110}%`,
      markers: false

    }
  });

  // Анимация для элементов внутри слайдов (опционально)
  slides.forEach((slide, index) => {
    const animElements = slide.querySelectorAll(".anim");

    // Создаем timeline для каждого слайда
    const slideTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "left center",
        end: "center center",
        containerAnimation: horizontalScroll,
        scrub: true,

      }
    });

    // Анимация входа (при скролле вперед)
    slideTimeline.fromTo(animElements, {
      translate: "-100vw 0",
    }, {
      translate: 0,
      duration: 1,
      ease: "cubic-bezier(0.8, 0, 0.2, 1);"
    });

  });
}

// // Инициализация
window.addEventListener("load", initHorizontalScroll);
window.addEventListener("resize", initHorizontalScroll);
