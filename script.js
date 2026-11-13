const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = aberto ? "✕" : "☰";
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const escuro = document.body.classList.contains("dark");
  themeToggle.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
  themeToggle.textContent = escuro ? "☀" : "◐";
});
