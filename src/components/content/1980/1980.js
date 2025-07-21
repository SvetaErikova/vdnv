function Olympics(){
  gsap.to('.olympics .olympics__gallery_wrapper', {
    x: '-30%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.olympics__gallery',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      markers: false
    }
  });

  gsap.fromTo('.olympics .olympics__bottom .olympics__bottom_image',  {
    top: '50%',
  },{
    top: '35%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.olympics .olympics__bottom',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      markers: false
    }
  });
}


let olympics = document.querySelector('.olympics');
if (olympics) {
  Olympics()
}
