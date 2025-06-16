// Função para rolar suavemente até o topo da página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!toggle || !menu) return;

  // Função para abrir o menu com animação
  function openMenu() {
    menu.classList.remove("hidden");
    menu.classList.remove("opacity-0", "scale-95");
    menu.classList.add("opacity-100", "scale-100");
  }

  // Função para fechar o menu com animação
  function closeMenu() {
    menu.classList.remove("opacity-100", "scale-100");
    menu.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });
});

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const entradaSom = document.getElementById("entrada-som");
  const jaViuLoading = localStorage.getItem("hellforge-loaded");

  if (!loadingScreen) return;

  if (!jaViuLoading) {
    if (entradaSom) {
      entradaSom.volume = 0.2;
      entradaSom.play().catch(() => {
        // Se som bloqueado, espera clique para tocar
        document.addEventListener("click", () => entradaSom.play(), { once: true });
      });
    }

    setTimeout(() => {
      loadingScreen.style.transition = "opacity 0.8s ease";
      loadingScreen.style.opacity = 0;
      setTimeout(() => {
        loadingScreen.remove();
      }, 800);
    }, 2000);

    localStorage.setItem("hellforge-loaded", "true");
  } else {
    loadingScreen.remove();
  }
});



