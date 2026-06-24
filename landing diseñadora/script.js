// =========================================
// MLM — Interiorismo Estratégico
// Interacciones de la landing
// =========================================

(function () {
  'use strict';

  // ---- Nav scroll state ----
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-open');
    menu.classList.toggle('is-open');
  });
  menu.querySelectorAll('a').forEach((l) =>
    l.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
    })
  );

  // ---- Reveal on scroll ----
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Antes / Después slider ----
  document.querySelectorAll('[data-compare]').forEach((root) => {
    const before = root.querySelector('.compare__before');
    const handle = root.querySelector('.compare__handle');
    const range = root.querySelector('.compare__range');
    const set = (v) => {
      const pct = Math.max(0, Math.min(100, v));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + '%';
    };
    range.addEventListener('input', (e) => set(+e.target.value));
    set(50);
  });

  // ---- Contact form ----
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const property = (data.get('property') || '').toString();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !property || !message) {
        msg.style.color = '#d9d0c7';
        msg.textContent = 'Por favor completa todos los campos.';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.style.color = '#d9d0c7';
        msg.textContent = 'Revisa el formato del email.';
        return;
      }

      msg.style.color = '#ab9c8b';
      msg.textContent = '¡Gracias! María Loreto te responderá en menos de 24 hrs.';
      form.reset();
      setTimeout(() => (msg.textContent = ''), 6000);
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
