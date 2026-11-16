// mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (btn) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
