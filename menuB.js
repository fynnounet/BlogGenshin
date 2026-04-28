const burger = document.getElementById('burger');
const navLinks = document.querySelector('.navInfo ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Fermer en cliquant ailleurs
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});