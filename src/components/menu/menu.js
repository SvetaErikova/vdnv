let page = document.querySelector('.page');
function startPreload(data) {
  let preloader = document.querySelector('.preloader'),
    preloaderimages = preloader?.querySelectorAll('img');
    preloaderimages.forEach(img => {
      let attr = img.getAttribute('data-year');
      attr === data ? img.classList.remove('hidden') : img.classList.add('hidden');
    })

    page.classList.add('loading');
    setTimeout(() => {
      page.classList.remove('loading');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelector(".menu");
  if (!menu) return;
  let burger = document.querySelector('.nav .icon-burger');
  let close = document.querySelector('.nav .icon-close');
  burger.addEventListener('click', () => {
    page.classList.add('open_menu');
  })
  close.addEventListener('click', () => {
    page.classList.remove('open_menu');
  })
  menu.querySelectorAll('.menu__timeline_item').forEach(item => {
    item.addEventListener('click', () => {
      page.classList.remove('open_menu');
    })
  })
  function Observer(){
    const links = menu.querySelectorAll('.menu__timeline a');
    const sections = [];
    links.forEach(link => {
      const hash = link.getAttribute('href').substring(1);
      const section = document.getElementById(hash);
      if (section) {
        sections.push(section);
        link.addEventListener("click", (e) => {
          e.preventDefault();
          let attr = e.target.getAttribute('href').substring(1)
          startPreload(attr);
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);

        });
      }
    });

    const observer = new IntersectionObserver((entries) => {
      let mostVisibleEntry = null;
      let maxRatio = 0;
      entries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleEntry = entry;
        }
      });
      links.forEach(link => {
        const linkHash = link.getAttribute('href').substring(1);
        link.classList.toggle("is_active",
          mostVisibleEntry && linkHash === mostVisibleEntry.target.id
        );
      });

    }, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.1, 0.5, 0.9]
    });
    sections.forEach(section => observer.observe(section));
  }
  Observer()
});
