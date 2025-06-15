function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.add("opacity-100", "scale-100");
        menu.classList.remove("opacity-0", "scale-95");
      }, 10);
    } else {
      menu.classList.remove("opacity-100", "scale-100");
      menu.classList.add("opacity-0", "scale-95");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 300); // duração da animação em ms
    }
  });
});

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const entradaSom = document.getElementById("entrada-som");

  if (entradaSom) {
    entradaSom.volume = 0.2;

    entradaSom.play().catch((err) => {
      console.log("Som bloqueado, aguardando interação:", err);
      document.addEventListener("click", () => {
        entradaSom.play();
      }, { once: true });
    });
  }

  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.transition = "opacity 0.8s ease";
      loadingScreen.style.opacity = 0;
      setTimeout(() => loadingScreen.remove(), 800);
    }, 2000);
  }
});