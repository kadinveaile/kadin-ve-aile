const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(!!isOpen));
});

menu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (menu?.classList.contains("open")) {
      menu.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
    }
  });
});
