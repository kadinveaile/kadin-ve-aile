const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

yearEl.textContent = new Date().getFullYear();

hamburger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

menu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();

  note.textContent = `Teşekkürler ${name || ""}! Mesajın alındı (demo).`;
  form.reset();
});
