// AlphaSight Academy — Shared JS

// Active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// Animate numbers on scroll
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
    }, 16);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); observer.disconnect(); } });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
});
