document.addEventListener('DOMContentLoaded', () => {
  const projectSection = document.querySelector('.project__title');
  if (!projectSection) return;

  const digitStacks = document.querySelectorAll('.digit-stack');

  // Инициализация - показываем первую цифру
  digitStacks.forEach(stack => {
    gsap.set(stack, { y: 0 });
  });

  // Создаем ScrollTrigger
  ScrollTrigger.create({
    trigger: projectSection,
    start: "50% bottom",
    end: "bottom bottom",
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const progress = self.progress;

      digitStacks.forEach(stack => {
        const digitCount = stack.querySelectorAll('.digit').length;
        const totalMove = (digitCount - 1) * 100; // Общее перемещение в %

        gsap.to(stack, {
          top: `-${progress * totalMove}%`,
          duration: 0.1,
          ease: "none"
        });
      });
    }
  });
});
