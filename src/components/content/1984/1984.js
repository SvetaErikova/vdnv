// function initHorizontalScroll(block) {
//   const slides = block.querySelectorAll(".slide");
//   const slidesContainer = block.querySelector(".horizontal__slides");
//   // Создаем анимацию горизонтального движения
//   const horizontalScroll = gsap.to(slidesContainer, {
//     x: () => -((slides.length - 1) * window.innerWidth),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal__wrapper",
//       pin: true,
//       scrub: window.innerWidth <= 768 ? 1 :1.2,
//       end: () => `${slides.length * 100}%`,
//       markers: false
//
//     }
//   });
//   window.addEventListener('load', () => {
//     slides.forEach((slide, index) => {
//       const slideTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: slide,
//           start: "left center ",
//           end: "center center",
//           containerAnimation: horizontalScroll,
//           scrub: 1.1,
//           markers: false
//         }
//       });
//       const animElements = slide.querySelectorAll(".anim");
//       slide.fromTo(animElements, {
//         translate: "-100vw 0",
//       }, {
//         translate: 0,
//         duration: 1,
//         ease: "cubic-bezier(0.8, 0, 0.2, 1);",
//       });
//     });
//   })
//   ScrollTrigger.refresh();
// }

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


function initHorizontalScroll(block) {
  const slides = block.querySelectorAll('.slide');
  const slidesContainer = block.querySelector('.horizontal__slides');
  let lastScrollPosition = 0;
  let currentDirection = 'forward'; // 'forward' или 'backward'

  const swiper = new Swiper(slidesContainer, {
    createElements: true,
    slideClass: 'slide',
    slidesPerView: 1,
    direction: 'horizontal',
    allowTouchMove: false,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function() {
        const currentSlide = this.slides[this.activeIndex];
        const prevSlide = this.slides[this.previousIndex];

        if (currentDirection === 'forward') {
          // Анимация для следующего слайда
          animateContentIn(currentSlide, 'forward');
        } else {
          // Обратная анимация для предыдущего слайда
          animateContentIn(prevSlide, 'backward');
        }
      }
    }
  });

  function animateContentIn(slide, direction) {
    const animElements = slide.querySelectorAll('.anim');

    if (direction === 'forward') {
      gsap.fromTo(animElements, {
        x: '-100vw',
      }, {
        x: 0,
        duration: 1.2,
        ease: 'cubic-bezier(0.8, 0, 0.2, 1)',
        stagger: 0.1
      });
    } else {
      gsap.fromTo(animElements, {
        x: '0',
      }, {
        x: '-100vw',
        duration: 1.2,
        ease: 'cubic-bezier(0.8, 0, 0.2, 1)',
        stagger: -0.1
      });
    }
  }

  ScrollTrigger.create({
    trigger: block,
    start: 'bottom bottom',
    end: () => `+=${slides.length * 100}%`,
    pin: true,
    scrub: 1,
    markers: false,
    onUpdate: (self) => {
      // Определяем направление скролла
      currentDirection = self.scroll() > lastScrollPosition ? 'forward' : 'backward';
      lastScrollPosition = self.scroll();

      const progress = self.progress;
      const slideIndex = Math.floor(progress * slides.length);

      if (swiper.activeIndex !== slideIndex && slideIndex < slides.length) {
        swiper.slideTo(slideIndex);
      }
    }
  });
}

let cosmonautics = document.querySelector('.cosmonautics');
let movie = document.querySelector('.movie');
if (cosmonautics) {
    initCosmomauticsSlider(cosmonautics.querySelector('.cosmonautics__slider'))
    initHorizontalScroll(movie.querySelector('.horizontal'));
    gsap.to('.movie .horizontal .anim-rotate',  {
      rotate: '15%',
      translate: '7% 1%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.movie .horizontal .movieClapperboard',
        start: 'center bottom',
        end: '90% bottom ',
        scrub: true,
        markers: false
      }
    });
}
