// menu
const header = document.querySelector<HTMLElement>('#header');
const menuBtn = document.querySelector<HTMLButtonElement>('.header__menu-btn');

menuBtn?.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  header?.classList.toggle('active');
});
