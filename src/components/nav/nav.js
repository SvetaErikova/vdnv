

document.addEventListener('DOMContentLoaded', () => {
  const timelineLabels = document.querySelector('.timeline__labels');
  const labels = document.querySelectorAll('.timeline__label');

  // Получаем все секции, которые соответствуют data-year атрибутам
  const sections = Array.from(document.querySelectorAll('[id]')).filter(section => {
    return Array.from(labels).some(label => label.dataset.year === section.id);
  });

  // Создаем массив позиций секций
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

      // Находим текущую и следующую секции
      let currentSection = null;
      let nextSection = null;
      let progressBetweenSections = 0;

      for (let i = 0; i < sectionPositions.length; i++) {
        if (currentScroll >= sectionPositions[i].start && currentScroll < sectionPositions[i].end) {
          currentSection = sectionPositions[i];
          nextSection = sectionPositions[i + 1];

          // Прогресс между текущей и следующей секцией
          if (nextSection) {
            progressBetweenSections = (currentScroll - currentSection.start) /
              (nextSection.start - currentSection.start);
          }
          break;
        }
      }

      // Плавное перемещение временной шкалы
      if (currentSection) {
        const currentIndex = sectionPositions.indexOf(currentSection);
        const labelWidth = labels[0].offsetWidth;
        const gap = 40; // Соответствует gap в CSS

        // Рассчитываем позицию для плавного перемещения
        let targetPosition;

        if (nextSection && progressBetweenSections > 0) {
          // Промежуточное положение между метками
          const currentLabelPos = currentIndex * (labelWidth + gap);
          const nextLabelPos = (currentIndex + 1) * (labelWidth + gap);
          targetPosition = currentLabelPos + (nextLabelPos - currentLabelPos) * progressBetweenSections;
        } else {
          // Точное положение текущей метки
          targetPosition = currentIndex * (labelWidth + gap);
        }

        // Центрируем с учетом ширины контейнера
        const containerWidth = timelineLabels.offsetWidth;
        const centeredPosition = targetPosition - (containerWidth / 2) + (labelWidth / 2);

        // Плавная анимация скролла
        gsap.to(timelineLabels, {
          scrollTo: { x: centeredPosition, autoKill: false },
          duration: 0.5,
          ease: 'power2.out'
        });

        // Обновляем активную метку
        labels.forEach((label, index) => {
          const shouldActivate = index === currentIndex ||
            (index === currentIndex + 1 && progressBetweenSections > 0.5);
          label.classList.toggle('active', shouldActivate);

        });
      }
    }
  });
});
