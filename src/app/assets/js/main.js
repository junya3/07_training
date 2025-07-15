// menu
const header = document.querySelector("#header");
const menuBtn = document.querySelector(".header__menu-btn");
menuBtn?.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  header?.classList.toggle("active");
});
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("is-resizing");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("is-resizing");
  }, 300);
});
export {};
