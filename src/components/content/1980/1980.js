gsap.fromTo('.olympics .olympics__bottom .olympics__bottom_image',  {
  y: '10%',
},{
  y: '-10%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.olympics .olympics__bottom',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    markers: false
  }
});

