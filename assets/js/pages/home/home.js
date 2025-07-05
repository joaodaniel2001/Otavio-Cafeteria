
window.addEventListener('scroll', function () {
  let header = this.document.querySelector('header');
  let banner = this.document.getElementById('banner')
  header.classList.toggle('rolagem', window.scrollY > 0);
  banner.classList.toggle('rolagem', window.scrollY > 0);
});