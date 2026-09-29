const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const tilt = document.querySelector('[data-tilt]');

const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

menuToggle?.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

if (tilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tilt.addEventListener('pointermove', (event) => {
    const rect = tilt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `rotateX(${y * -7}deg) rotateY(${x * 9}deg)`;
  });
  tilt.addEventListener('pointerleave', () => {
    tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || '0');
      const start = performance.now();
      const duration = 1000 + Math.min(target, 4000) / 8;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('ja-JP');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.45 }
);
document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  button.addEventListener('pointerleave', () => {
    button.style.transform = '';
  });
});

const canvas = document.getElementById('sandCanvas');
const ctx = canvas?.getContext('2d');
let particles = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 14)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 0.7 + Math.random() * 1.8,
    s: 0.22 + Math.random() * 0.62,
    a: 0.18 + Math.random() * 0.38,
  }));
}

function animateSand() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((p) => {
    p.y += p.s;
    p.x += Math.sin((p.y + p.r) * 0.014) * 0.16;
    if (p.y > window.innerHeight + 8) {
      p.y = -8;
      p.x = Math.random() * window.innerWidth;
    }
    ctx.beginPath();
    ctx.fillStyle = `rgba(195, 148, 67, ${p.a})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateSand);
}

if (canvas && ctx && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });
  animateSand();
}
