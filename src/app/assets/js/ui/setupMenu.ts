const setupMenu = () => {
  const header = document.querySelector<HTMLElement>('#header');
  const menuBtn = document.querySelector<HTMLButtonElement>('.header__menu-btn');

  if (!header || !menuBtn) return;

  menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    header?.classList.toggle('active');
  });

  let resizeTimer: ReturnType<typeof setTimeout>;

  window.addEventListener('resize', () => {
    document.body.classList.add('is-resizing');

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('is-resizing');
    }, 300);
  });
};

export default setupMenu;
