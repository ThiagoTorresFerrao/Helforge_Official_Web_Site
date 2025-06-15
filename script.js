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
    // Remove classes que deixam invisível e pequeno
    menu.classList.remove("opacity-0", "scale-95");
    // Adiciona classes que deixam visível e no tamanho normal
    menu.classList.add("opacity-100", "scale-100");
  }

  // Função para fechar o menu com animação
  function closeMenu() {
    // Remove classes de visibilidade total
    menu.classList.remove("opacity-100", "scale-100");
    // Adiciona classes de invisibilidade e tamanho reduzido
    menu.classList.add("opacity-0", "scale-95");
    // Após animação (300ms), oculta o menu
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

  // Se é a primeira visita, mostra loading com som
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
    }, 2000); // duração do loading visível

    localStorage.setItem("hellforge-loaded", "true");
  } else {
    // Se já viu o loading antes, remove instantaneamente
    loadingScreen.remove();
  }
});

