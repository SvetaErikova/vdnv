function initHorizontalScroll(block) {
  const slides = block.querySelectorAll(".slide");
  const slidesContainer = block.querySelector(".horizontal__slides");

  // Устанавливаем ширину контейнера слайдов
  // gsap.set(slidesContainer, {
  //   width: `${slides.length * 100}vw`
  // });

  // Создаем анимацию горизонтального движения
  const horizontalScroll = gsap.to(slidesContainer, {
    x: () => -((slides.length - 1) * window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal__wrapper",
      pin: true,
      scrub: 1.2,
      end: () => `${slides.length * 100}%`,
      markers: false

    }
  });

  // Анимация для элементов внутри слайдов (опционально)
  slides.forEach((slide, index) => {
    // Создаем timeline для каждого слайда
    const slideTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "left center ",
        end: "center center",
        containerAnimation: horizontalScroll,
        scrub: 1.1,
        markers: false
      }
    });
    const animElements = slide.querySelectorAll(".anim");
    // Анимация входа (при скролле вперед)
    slideTimeline.fromTo(animElements, {
      translate: "-100vw 0",
    }, {
      translate: 0,
      duration: 1,
      ease: "cubic-bezier(0.8, 0, 0.2, 1);",

    });

  });
}
function initCosmomauticsSlider(block){
  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');

  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper--prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper--next');
  slider_controls.append(swiper_nav_next);

  const swiper = new Swiper( block , {
    createElements: true,
    slideClass: 'card',
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: true,
    uniqueNavElements: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
    },
  });
  block.append(slider_controls);
}

let cosmonautics = document.querySelector('.cosmonautics');
if (cosmonautics) {
  document.addEventListener('DOMContentLoaded', () => {
    initCosmomauticsSlider(cosmonautics.querySelector('.cosmonautics__slider'))
    initHorizontalScroll(cosmonautics.querySelector('.horizontal'));

    // window.addEventListener("resize", initHorizontalScroll);
    gsap.to('.cosmonautics .horizontal .anim-rotate',  {
      rotate: '15%',
      translate: '7% 1%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.cosmonautics .horizontal .movieClapperboard',
        start: 'center bottom',
        end: '90% bottom ',
        scrub: true,
        markers: false
      }
    });
  })

}
