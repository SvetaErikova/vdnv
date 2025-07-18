window.addEventListener('load', () => {
  let scrollbar_width = window.innerWidth - document.documentElement.clientWidth,
      nav_height = document.querySelector('.nav').offsetHeight;
  document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbar_width}px`)
  document.documentElement.style.setProperty('--navHeight', `${nav_height}px`)
});

window.addEventListener('scroll', () => {
  let isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight
  isAtBottom ? page.classList.add('is_end') : page.classList.remove('is_end')
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
