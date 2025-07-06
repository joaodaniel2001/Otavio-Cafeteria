document.addEventListener("DOMContentLoaded", () => {
  const carrinho = document.getElementById("carrinho");

  carrinho.addEventListener("mouseover", () => {
    carrinho.classList.replace("bi-cart", "bi-cart-fill");
  });

  carrinho.addEventListener("mouseout", () => {
    carrinho.classList.replace("bi-cart-fill", "bi-cart");
  });

  let lastScroll = 0;
  const logoImg = document.getElementById("logo-img");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector("header");
    const banner = document.getElementById("banner");

    if (currentScroll === 0) {
      header.style.top = "0";
      header.classList.remove("rolagem");
      logoImg.src = "./assets/img/global/logoPreta.png";
    } else if (currentScroll < lastScroll) {
      header.style.top = "0";
      header.classList.add("rolagem");
      logoImg.src = "./assets/img/global/logoLoja.png";
    } else {
      const headerHeight = header.getBoundingClientRect().height;
      header.style.top = `-${headerHeight}px`;
      logoImg.src = "./assets/img/global/logoLoja.png";
    }

    banner?.classList.toggle("rolagem", currentScroll > 0);
    lastScroll = currentScroll;
  });
});
