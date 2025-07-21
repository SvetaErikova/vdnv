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
let menu = document.querySelector(".menu");
function initMenu(){
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
  const links = menu.querySelectorAll('.menu__timeline a');
  links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let attr = e.target.getAttribute('href').substring(1)
        // startPreload(attr);
        const href = e.target.getAttribute('href');
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });

  });
}
document.addEventListener('DOMContentLoaded', () => {
  initMenu()
});
