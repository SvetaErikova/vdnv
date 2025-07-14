function Opening(block){
  gsap.to('.opening .opening__anim .human', {
    x: '-30%', // Движение на 20% вправо
    ease: 'none',
    scrollTrigger: {
      trigger: '.opening .opening__anim .human',
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: 1.2,
      markers: false
    }
  });

  gsap.to('.opening .opening__anim .cosmos', {
    filter: 'blur(5px)',
    ease: 'none',
    scrollTrigger: {
      trigger: '.opening__anim',
      start: window.innerWidth <= 768 ? '70% center' : '60% center',
      end: window.innerWidth <= 768 ? 'bottom top' : 'bottom center',
      scrub: 1.2,
      markers: false
    }
  });
  gsap.to('.opening .opening__anim .text', {
    y: '50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.opening__anim',
      start:  window.innerWidth <= 768 ? '70% bottom' : '50% bottom',
      end: 'bottom top',
      scrub: 1.2,
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
      scrub: 1.2,
      markers: false
    }
  });
  block.querySelectorAll('.opening__info .text, .opening__info div p').forEach((textElement) => {
    gsap.fromTo(textElement,
      {
        y: 50,
        opacity: 0.7
      },
      {
        y: -30,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: textElement.closest('.wrapper'),
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.2,
          markers: false
        }
      }
    );
  });


}

let opening = document.querySelector('.opening');
if (opening) {
  document.addEventListener('DOMContentLoaded', () => {
    Opening(opening)
  })

}
