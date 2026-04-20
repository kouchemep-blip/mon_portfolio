
/* ===== PRELOAD ===== */
window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.remove('preload'), 400);
});

/* ===== NAV SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== TYPED.JS ===== */
new Typed('#typing-text', {
  strings: ['Frontend Developer', 'Web Developer', 'Computer Scientist', 'Network Administrator', 'Cybersecurity Expert'],
  typeSpeed: 80, backSpeed: 60, backDelay: 1200, loop: true, showCursor: true, cursorChar: '|'
});

/* ===== MARQUEE ===== */
const items = ['HTML5','CSS3','JavaScript','React','Python','PHP','Bootstrap','Cybersecurity','Networks','UI/UX','Git','Node.js'];
const track = document.getElementById('marqueeTrack');
[...items,...items,...items].forEach(name => {
  const el = document.createElement('div');
  el.className = 'marquee-item';
  el.innerHTML = `${name}<span class="marquee-dot"></span>`;
  track.appendChild(el);
});

/* ===== SCROLL REVEAL ===== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('up');
    // animate counters
    e.target.querySelectorAll('[data-count]').forEach(animateCount);
    // animate tech bars
    e.target.querySelectorAll('.tech-bar-fill').forEach(fill => {
      fill.style.width = fill.dataset.w + '%';
    });
    // animate radial fills
    e.target.querySelectorAll('.radial-fill').forEach(animateRadial);
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* Trigger skills when section scrolls into view */
const skillsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.tech-bar-fill').forEach(f => f.style.width = f.dataset.w + '%');
    e.target.querySelectorAll('.radial-fill').forEach(animateRadial);
    skillsObs.unobserve(e.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.skills-section').forEach(el => skillsObs.observe(el));

/* ===== COUNTER ===== */
function animateCount(el) {
  const target = +el.dataset.count;
  let cur = 0;
  const step = target / 40;
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.round(cur) + (cur >= target ? '+' : '');
    if (cur >= target) clearInterval(t);
  }, 30);
}

/* ===== RADIAL BARS ===== */
function animateRadial(circle) {
  const pct = +circle.dataset.pct;
  const circumference = 2 * Math.PI * 40; // r=40
  const offset = circumference - (pct / 100) * circumference;
  circle.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.23,1,0.32,1)';
  circle.style.strokeDashoffset = offset;
}

/* ===== JOIN TYPING ===== */
const joinEl = document.getElementById('joinTyping');
const joinWords = ['What about working together ?','You know what you should do ?','Let me know your appreciation...','Have a great day!'];
let ji = 0, jj = 0, jDel = false;
function joinType() {
  const w = joinWords[ji];
  if (!jDel) {
    joinEl.textContent = w.substring(0, jj + 1);
    jj++;
    if (jj === w.length) { jDel = true; setTimeout(joinType, 1200); return; }
  } else {
    joinEl.textContent = w.substring(0, jj - 1);
    jj--;
    if (jj === 0) { jDel = false; ji = (ji + 1) % joinWords.length; }
  }
  setTimeout(joinType, jDel ? 60 : 120);
}
joinType();

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  const btn = e.target.querySelector('.form-submit');
  success.style.display = 'block';
  btn.textContent = '✓ Envoyé !'; btn.disabled = true;
  setTimeout(() => {
    success.style.display = 'none';
    e.target.reset();
    btn.innerHTML = 'Envoyer <i class="fa fa-paper-plane"></i>'; btn.disabled = false;
  }, 4000);
});