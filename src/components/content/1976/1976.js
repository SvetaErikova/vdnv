
function Project(block) {
  const projectSection = block.querySelector('.title_scrolling');
  if (!projectSection) return;
  const titleYears = block.querySelectorAll('.title_year');

  titleYears.forEach(titleYear => {
    const digitContainers = titleYear.querySelectorAll('.digit-container');

    digitContainers.forEach((container, index) => {
      const digitStack = container.querySelector('.digit-stack');
      const digitCount = digitStack.querySelectorAll('.digit').length;
      const totalMove = (digitCount - 1) * 100;

      ScrollTrigger.create({
        trigger: projectSection,
        // start: window.innerWidth <= 768 ? 'center center' : '50% bottom',
        start: '50% bottom',
        // end: window.innerWidth <= 768 ? 'bottom center ' : 'bottom bottom',
        end:  'bottom bottom',
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          if (index < 2) {
            gsap.to(digitStack, {
              bottom: `-${progress * totalMove}%`,
              duration: 0.1,
              ease: "none"
            });
          } else {
            gsap.to(digitStack, {
              top: `-${progress * totalMove}%`,
              duration: 0.1,
              ease: "none"
            });
          }
        }
      });
    });
  });
  // if (window.matchMedia('(min-width: 769px)').matches) {
    ScrollTrigger.create({
      trigger: block,
      start: "bottom bottom",
      end: 'bottom +=100vh',
      pin: true,
      pinSpacing: false,
      markers: false
    });
  // }
}
let projectTitle = document.querySelector('.project__title');
if(projectTitle){
  document.addEventListener('DOMContentLoaded', () => {
    Project(projectTitle)
  })
}

