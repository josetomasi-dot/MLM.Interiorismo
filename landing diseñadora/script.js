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

  // ---- Antes / Después slider + selector ----
  document.querySelectorAll('[data-compare]').forEach((root) => {
    const before = root.querySelector('.compare__before');
    const handle = root.querySelector('.compare__handle');
    const range = root.querySelector('.compare__range');
    const setSplit = (v) => {
      const pct = Math.max(0, Math.min(100, v));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + '%';
    };
    range.addEventListener('input', (e) => setSplit(+e.target.value));
    setSplit(50);
    root._setSplit = setSplit;
    root._range = range;
  });

  // Switch comparisons via thumbnails
  const compareRoot = document.getElementById('adCompare');
  const captionEl = document.getElementById('adCaption');
  const thumbs = document.querySelectorAll('.ad-thumb');
  if (compareRoot && thumbs.length) {
    const beforeImg = compareRoot.querySelector('.compare__before');
    const afterImg = compareRoot.querySelector('.compare__after');
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const b = thumb.dataset.before;
        const a = thumb.dataset.after;
        const cap = thumb.dataset.caption || '';
        if (!b || !a) return;
        beforeImg.src = b;
        afterImg.src = a;
        if (captionEl) captionEl.textContent = cap;
        thumbs.forEach((t) => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        thumb.classList.add('is-active');
        thumb.setAttribute('aria-selected', 'true');
        // reset slider to 50%
        if (compareRoot._setSplit && compareRoot._range) {
          compareRoot._range.value = 50;
          compareRoot._setSplit(50);
        }
        compareRoot.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  // ---- Lightbox for proyectos ----
  const lightbox = document.getElementById('lightbox');
  const proyectos = [...document.querySelectorAll('.proyecto')];
  if (lightbox && proyectos.length) {
    const lbImg = document.getElementById('lightboxImg');
    const lbTag = document.getElementById('lightboxTag');
    const lbTitle = document.getElementById('lightboxTitle');
    const lbText = document.getElementById('lightboxText');
    const lbResult = document.getElementById('lightboxResult');
    const lbCount = document.getElementById('lightboxCount');
    let currentIdx = 0;

    const render = (i) => {
      const p = proyectos[i];
      lbImg.src = p.dataset.img;
      lbImg.alt = p.dataset.title || '';
      lbTag.textContent = p.dataset.tag || '';
      lbTitle.textContent = p.dataset.title || '';
      lbText.textContent = p.dataset.text || '';
      lbResult.textContent = p.dataset.result || '';
      lbCount.textContent = `${i + 1} / ${proyectos.length}`;
      currentIdx = i;
    };

    const open = (i) => {
      render(i);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const next = () => render((currentIdx + 1) % proyectos.length);
    const prev = () => render((currentIdx - 1 + proyectos.length) % proyectos.length);

    proyectos.forEach((p, i) => {
      p.addEventListener('click', () => open(i));
    });
    lightbox.querySelectorAll('[data-close]').forEach((el) =>
      el.addEventListener('click', close)
    );
    lightbox.querySelector('[data-next]').addEventListener('click', next);
    lightbox.querySelector('[data-prev]').addEventListener('click', prev);
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
  }

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

  // ---- Lead magnet form ----
  const leadForm = document.getElementById('leadMagnetForm');
  const leadMsg = document.getElementById('leadMsg');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(leadForm);
      const name = (data.get('leadName') || '').toString().trim();
      const email = (data.get('leadEmail') || '').toString().trim();
      if (!name || !email) {
        leadMsg.style.color = '#d9d0c7';
        leadMsg.textContent = 'Por favor completa nombre y email.';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        leadMsg.style.color = '#d9d0c7';
        leadMsg.textContent = 'Revisa el formato del email.';
        return;
      }
      leadMsg.style.color = '#d8c594';
      leadMsg.textContent = '¡Listo! Te enviaremos la guía a tu correo.';
      leadForm.reset();
      setTimeout(() => (leadMsg.textContent = ''), 6000);
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
