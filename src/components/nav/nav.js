

document.addEventListener('DOMContentLoaded', () => {
  const timelineLabels = document.querySelector('.timeline__labels');
  const labels = document.querySelectorAll('.timeline__label');

  const sections = Array.from(document.querySelectorAll('[id]')).filter(section => {
    return Array.from(labels).some(label => label.dataset.year === section.id);
  });

  const sectionPositions = sections.map(section => {
    return {
      element: section,
      start: section.offsetTop,
      end: section.offsetTop + section.offsetHeight
    };
  });

  // Инициализация ScrollTrigger
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const currentScroll = window.scrollY;

    }
  });
});
