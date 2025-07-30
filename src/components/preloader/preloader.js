let page = document.querySelector('.page');
function loadPage() {
  page.classList.add('first_loading');
  setTimeout(() => {
    page.classList.remove('first_loading');
  }, 2000);
}
loadPage()
