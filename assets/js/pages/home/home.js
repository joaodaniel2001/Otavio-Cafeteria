/* Muda o carrinho */
document.addEventListener("DOMContentLoaded", () => {
  const carrinho = document.getElementById("carrinho");

  carrinho.addEventListener("mouseover", () => {
    carrinho.classList.replace("bi-cart", "bi-cart-fill");
  });

  carrinho.addEventListener("mouseout", () => {
    carrinho.classList.replace("bi-cart-fill", "bi-cart");
  });

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector("header");
    const banner = document.getElementById("banner");

    if (currentScroll === 0) {
      // Topo da página => mostra transparente
      header.style.top = "0";
      header.classList.remove("rolagem");
    } else if (currentScroll < lastScroll) {
      // Rolando para cima => aparece com fundo preto
      header.style.top = "0";
      header.classList.add("rolagem");
    } else {
      // Rolando para baixo => esconde completamente
      const headerHeight = header.getBoundingClientRect().height;
      header.style.top = `-${headerHeight}px`;
    }

    banner.classList.toggle("rolagem", currentScroll > 0);
    lastScroll = currentScroll;
  });
});

/* Roleta de Imagens */

document.addEventListener("DOMContentLoaded", () => {
  const imagens = [
    "./assets/img/pages/home/davi-img01.jpg",
    "./assets/img/pages/home/davi-img02.jpg",
    "./assets/img/pages/home/davi-img03.jpg",
    "./assets/img/pages/home/davi-img04.jpg",
  ];

  const banner = document.getElementById("img-Davi");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % imagens.length;
    banner.src = imagens[index];
  }, 5000);
});
