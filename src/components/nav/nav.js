function calculateSectionBounds() {
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
let labels = Array.from(document.querySelectorAll('.nav .timeline__label'));
let speed = .2;
let sectionBounds = calculateSectionBounds()


function scrollTimeline() {
  let timelineLabels = document.querySelector('.timeline__labels'),
    links = menu.querySelectorAll('.menu__timeline a');
  for (let i = 0; i < sectionBounds.length; i++) {
    labels[i].dataset.year = i
    labels[i].style.width = `${sectionBounds[i].height * speed }px `
  }
  ScrollTrigger.create({
    trigger: document.querySelector('.page'),
    start: "top top",
    end: "bottom bottom",
    markers: false,
    stub: 1,
    onUpdate: (self) => {
      const scrollY = window.scrollY ;
      for (let i = 0; i < sectionBounds.length; i++) {
        if (scrollY >= sectionBounds[i].start && scrollY < sectionBounds[i].end) {
          currentSectionIndex = i;
          links.forEach(link => {
            link === links[i] ? link.classList.add('is_active') : link.classList.remove('is_active');
          })
          break;
        }
      }
      timelineLabels.scrollLeft = scrollY * speed
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  scrollTimeline();
})



