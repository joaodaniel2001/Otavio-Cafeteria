
window.addEventListener('scroll', function () {
  let header = this.document.querySelector('header');
  let banner = this.document.getElementById('banner')
  header.classList.toggle('rolagem', window.scrollY > 0);
  banner.classList.toggle('rolagem', window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const carrinho = document.getElementById("carrinho");

  carrinho.addEventListener("mouseover", () => {
    carrinho.classList.replace("bi-cart", "bi-cart-fill");
  });

  carrinho.addEventListener("mouseout", () => {
    carrinho.classList.replace("bi-cart-fill", "bi-cart");
  });
});
