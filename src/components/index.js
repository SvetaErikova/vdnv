window.addEventListener('load', () => {

  let scrollbar_width = window.innerWidth - document.documentElement.clientWidth
  document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbar_width}px`)


});

if (window.matchMedia('(min-width: 769px)').matches) {

//   const lenis = new Lenis({
//     duration: .1,
//   });
//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);

}
