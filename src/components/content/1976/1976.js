
function Project(block){
  const projectSection = block.querySelector('.title_scrolling');
  if (!projectSection) return;

// Находим все блоки .title_year (их два: белый и черный)
  const titleYears = block.querySelectorAll('.title_year');

  titleYears.forEach(titleYear => {
    // В каждом .title_year находим все .digit-container
    const digitContainers = titleYear.querySelectorAll('.digit-container');

    digitContainers.forEach((container, index) => {
      const digitStack = container.querySelector('.digit-stack');
      const digitCount = digitStack.querySelectorAll('.digit').length;
      const totalMove = (digitCount - 1) * 100;

      ScrollTrigger.create({
        trigger: projectSection,
        start: "50% bottom",
        end: "bottom bottom",
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
          }

          else {
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


  const projectTitle = block.querySelector('.project__title');

// Создаем анимацию/фиксацию
  ScrollTrigger.create({
    trigger: projectTitle,
    start: "bottom bottom",
    end: "bottom +=100vh",
    pin: true,
    pinSpacing: true,
    markers: false
  });
}

let project = document.querySelector('.project');
if(project){
  document.addEventListener('DOMContentLoaded', () => {
    Project(project)
  })
}
;

