function calculateSectionBounds() {
  const labels = document.querySelectorAll('.timeline__label');
  const sections = Array.from(labels).map(label =>
    document.getElementById(label.getAttribute('data-year'))
  );
  return sections.map((section, index) => {
    if (!section) return { start: 0, end: 0, height: 0 };
    const rect = section.getBoundingClientRect();
    const start = rect.top + window.scrollY;
    const nextSection = sections[index + 1];
    const end = nextSection
      ? nextSection.getBoundingClientRect().top + window.scrollY
      : document.documentElement.scrollHeight;
    return { start, end, height: end - start };
  });
}

function scrollTimeline() {
  const timelineLabels = document.querySelector('.timeline__labels');
  const labels = Array.from(document.querySelectorAll('.timeline__label'));
  const sections = labels.map(label => document.getElementById(label.getAttribute('data-year')));

  // Фиксированная ширина каждого лейбла
  const LABEL_WIDTH = labels[1].offsetWidth;
  // console.log(LABEL_WIDTH);


  let maxScroll = timelineLabels.scrollWidth - timelineLabels.clientWidth;
  let sectionBounds = calculateSectionBounds();

  window.addEventListener('resize', () => {
    sectionBounds = calculateSectionBounds();
    maxScroll = timelineLabels.scrollWidth - timelineLabels.clientWidth;
  });

  ScrollTrigger.create({
    trigger: document.querySelector('.page'),
    start: "top top",
    end: "bottom bottom",
    markers: false,
    onUpdate: (self) => {
      const scrollY = window.scrollY;
      let currentSectionIndex = 0;
      let sectionProgress = 0;

      // Находим текущую секцию
      for (let i = 0; i < sectionBounds.length; i++) {
        if (scrollY >= sectionBounds[i].start && scrollY < sectionBounds[i].end) {
          currentSectionIndex = i;
          sectionProgress = (scrollY - sectionBounds[i].start) / sectionBounds[i].height;
          break;
        }
      }

      const scrollPosition = (currentSectionIndex + sectionProgress) * LABEL_WIDTH;

      timelineLabels.scrollLeft = Math.min(scrollPosition, maxScroll);
      // console.log(timelineLabels.scrollLeft);
    }
  });
}

window.addEventListener('load', () => {
  // scrollTimeline();
});
