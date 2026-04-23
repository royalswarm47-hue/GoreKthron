// ══════════════════════════════════════════════════════════════════
// GOREKTHRON — Main JavaScript
// ══════════════════════════════════════════════════════════════════

// ── LANGUAGE SYSTEM ──────────────────────────────────────────────
const TRANSLATIONS = {
  ru: {
    nav_features: 'Функции',
    nav_showcase: 'Галерея',
    nav_pricing: 'Цены',
    nav_faq: 'FAQ',
    nav_buy: 'Купить',
    hero_badge: 'ВЕРСИЯ 2.4 • UNDETECTED',
    hero_sub: 'Доминируй на <span>каждом сервере</span>',
    hero_cta1: 'НАЧАТЬ',
    hero_cta2: 'УЗНАТЬ БОЛЬШЕ',
    hero_scroll: 'ПРОКРУТИТЬ',
    feat_label: 'ВОЗМОЖНОСТИ',
    feat_title: 'Полный <span>арсенал</span>',
    feat_desc: 'Продуманные инструменты для абсолютного контроля над игрой',
    features: [
      { icon: '🎨', anim: 'icon-pulse', title: 'Кастомный GUI & 7 Тем', desc: 'Полностью настраиваемый интерфейс с 7 уникальными цветовыми схемами.' },
      { icon: '⚡', anim: 'icon-float', title: 'FPS Оптимизатор', desc: 'Умная оптимизация производительности для максимально плавного геймплея.' },
      { icon: '🛡️', anim: 'icon-rotate', title: 'Anticheat Bypass', desc: 'Продвинутые техники обхода систем защиты — 0 детекций.' },
      { icon: '⚔️', anim: 'icon-shake', title: 'MaceHelper', desc: 'Автоматизированная помощь в сражениях с высокой точностью.' },
      { icon: '🤖', anim: 'icon-bounce', title: 'AutoGG & AutoRespawn', desc: 'AutoGG, AutoRespawn, FastPlace для полной автоматизации.' },
      { icon: '💨', anim: 'icon-spin', title: 'AutoSprint & NoFall', desc: 'Постоянный спринт и защита от урона при падении.' },
      { icon: '✨', anim: 'icon-glow', title: 'Современный Дизайн', desc: 'Чистый элегантный интерфейс, не мешающий игровому процессу.' },
      { icon: '🔒', anim: 'icon-flicker', title: 'HWID Защита', desc: 'Лицензия привязана к вашему железу. Абсолютная безопасность.' },
    ],
    stats_label: 'СТАТИСТИКА',
    stats_title: 'Нам <span>доверяют</span>',
    stats_desc: 'Присоединяйтесь к тысячам игроков по всему миру',
    stats: [
      { num: 2000, suffix: '+', label: 'Пользователей' },
      { num: 50, suffix: '+', label: 'Серверов' },
      { num: 0, suffix: '', label: 'Детекций' },
      { num: 24, suffix: '/7', label: 'Обновления' },
    ],
    showcase_label: 'ГАЛЕРЕЯ',
    showcase_title: 'Посмотри <span>в деле</span>',
    showcase_desc: 'Скриншоты интерфейса и модулей GoreKthron',
    slides: [
      { icon: '🎮', title: 'Главный интерфейс', sub: 'Чистый и удобный GUI' },
      { icon: '⚙️', title: 'Настройки модулей', sub: 'Полный контроль каждого модуля' },
      { icon: '📊', title: 'FPS Панель', sub: 'Мониторинг производительности' },
      { icon: '🎨', title: 'Темы оформления', sub: '7 уникальных цветовых схем' },
    ],
    pricing_label: 'ЦЕНЫ',
    pricing_title: 'Выбери <span>план</span>',
    pricing_desc: 'Гибкие условия для каждого игрока',
    plans: [
      { name: '30 ДНЕЙ', price: '9.99', period: 'на 30 дней', badge: null, features: ['Все модули', 'HWID Защита', '24/7 Поддержка', 'Автообновления'] },
      { name: '90 ДНЕЙ', price: '19.99', period: 'на 90 дней', badge: 'ПОПУЛЯРНЫЙ', features: ['Все модули', 'HWID Защита', '24/7 Поддержка', 'Автообновления', 'Приоритетная поддержка', 'Ранний доступ'] },
      { name: 'НАВСЕГДА', price: '49.99', period: 'единоразово', badge: null, features: ['Все модули', 'HWID Защита', '24/7 Поддержка', 'Автообновления', 'Приоритетная поддержка', 'Пожизненные обновления'] },
    ],
    buy_now: 'КУПИТЬ',
    testimonials_label: 'ОТЗЫВЫ',
    testimonials_title: 'Что говорят <span>игроки</span>',
    testimonials: [
      { name: 'xXDarkWarrior', tag: 'HyPix Pro Player', text: '"GoreKthron — лучшее, что со мной случалось. 0 банов за 3 месяца, плавная работа, шикарный дизайн."', rating: 5, letter: 'D' },
      { name: 'CryptoSlayer99', tag: 'PvP Enthusiast', text: '"MaceHelper изменил мою игру полностью. Нигде больше такого нет. Рекомендую всем без исключения."', rating: 5, letter: 'C' },
      { name: 'NightShadow_MC', tag: 'Competitive Player', text: '"Покупал у многих — GoreKthron на голову выше. FPS вырос на 60%, а байпас работает идеально."', rating: 5, letter: 'N' },
      { name: 'VoidStriker', tag: 'UHC Veteran', text: '"Купил лайфтайм без раздумий. Дизайн красивый, модули работают, поддержка отвечает быстро."', rating: 5, letter: 'V' },
      { name: 'PixelReaper', tag: 'Bedwars Main', text: '"После GoreKthron я не могу играть без него. AutoSprint и NoFall — must have для любого PvP."', rating: 5, letter: 'P' },
    ],
    faq_label: 'FAQ',
    faq_title: 'Частые <span>вопросы</span>',
    faqs: [
      { q: 'Могут ли меня забанить?', a: 'GoreKthron использует передовые методы обхода защиты. Наш показатель — 0 детекций. Тем не менее, мы рекомендуем соблюдать осторожность на серверах с ручной модерацией.' },
      { q: 'Как получить лицензию после оплаты?', a: 'После успешной оплаты вы получите письмо на указанный email с инструкциями по активации. Лицензия привязывается к вашему HWID автоматически.' },
      { q: 'Как узнать мой HWID?', a: 'Запустите cmd и выполните команду: wmic csproduct get uuid. Скопируйте результат в поле HWID при покупке.' },
      { q: 'Какие версии Minecraft поддерживаются?', a: 'GoreKthron поддерживает Java Edition 1.8.x — 1.21.x. Регулярные обновления обеспечивают совместимость с новыми версиями.' },
      { q: 'Можно ли перенести лицензию на другой ПК?', a: 'Да, один раз в месяц вы можете сбросить привязку HWID через Discord поддержку. Lifetime — неограниченно.' },
    ],
    footer_tagline: 'Самый мощный Minecraft чит-клиент нового поколения.',
    footer_links: 'Ссылки',
    footer_support: 'Поддержка',
    footer_links_items: [{ text: 'Функции', href: '#features' }, { text: 'Цены', href: '#pricing' }, { text: 'FAQ', href: '#faq' }, { text: 'Купить', href: 'buy.html' }],
    footer_support_items: [{ text: 'Discord', href: '#' }, { text: 'Email', href: '#' }, { text: 'Telegram', href: '#' }],
    footer_copy: '© 2025 GoreKthron. Все права защищены.',
  },
  en: {
    nav_features: 'Features',
    nav_showcase: 'Showcase',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_buy: 'Buy Now',
    hero_badge: 'VERSION 2.4 • UNDETECTED',
    hero_sub: 'Dominate <span>Every Server</span>',
    hero_cta1: 'GET STARTED',
    hero_cta2: 'LEARN MORE',
    hero_scroll: 'SCROLL',
    feat_label: 'FEATURES',
    feat_title: 'Full <span>Arsenal</span>',
    feat_desc: 'Purpose-built tools for absolute control over every game',
    features: [
      { icon: '🎨', anim: 'icon-pulse', title: 'Custom GUI & 7 Themes', desc: 'Fully customizable interface with 7 unique color schemes.' },
      { icon: '⚡', anim: 'icon-float', title: 'FPS Optimizer', desc: 'Smart performance optimization for the smoothest possible gameplay.' },
      { icon: '🛡️', anim: 'icon-rotate', title: 'Anticheat Bypass', desc: 'Advanced bypass techniques — 0 detections on all major servers.' },
      { icon: '⚔️', anim: 'icon-shake', title: 'MaceHelper Module', desc: 'Automated combat assistance with high precision targeting.' },
      { icon: '🤖', anim: 'icon-bounce', title: 'AutoGG & AutoRespawn', desc: 'AutoGG, AutoRespawn, FastPlace for complete automation.' },
      { icon: '💨', anim: 'icon-spin', title: 'AutoSprint & NoFall', desc: 'Persistent sprint and fall damage protection.' },
      { icon: '✨', anim: 'icon-glow', title: 'Clean Modern Design', desc: 'Sleek elegant UI that never interferes with your gameplay.' },
      { icon: '🔒', anim: 'icon-flicker', title: 'HWID License Protection', desc: 'License bound to your hardware. Absolute security.' },
    ],
    stats_label: 'STATISTICS',
    stats_title: 'Trusted by <span>Thousands</span>',
    stats_desc: 'Join thousands of players worldwide',
    stats: [
      { num: 2000, suffix: '+', label: 'Users' },
      { num: 50, suffix: '+', label: 'Servers' },
      { num: 0, suffix: '', label: 'Detections' },
      { num: 24, suffix: '/7', label: 'Updates' },
    ],
    showcase_label: 'SHOWCASE',
    showcase_title: 'See it <span>in action</span>',
    showcase_desc: 'Screenshots of GoreKthron interface and modules',
    slides: [
      { icon: '🎮', title: 'Main Interface', sub: 'Clean and intuitive GUI' },
      { icon: '⚙️', title: 'Module Settings', sub: 'Full control over every module' },
      { icon: '📊', title: 'FPS Dashboard', sub: 'Performance monitoring' },
      { icon: '🎨', title: 'Color Themes', sub: '7 unique color schemes' },
    ],
    pricing_label: 'PRICING',
    pricing_title: 'Choose your <span>Plan</span>',
    pricing_desc: 'Flexible options for every player',
    plans: [
      { name: '30 DAYS', price: '9.99', period: 'for 30 days', badge: null, features: ['All modules', 'HWID Protection', '24/7 Support', 'Auto updates'] },
      { name: '90 DAYS', price: '19.99', period: 'for 90 days', badge: 'POPULAR', features: ['All modules', 'HWID Protection', '24/7 Support', 'Auto updates', 'Priority support', 'Early access'] },
      { name: 'LIFETIME', price: '49.99', period: 'one time payment', badge: null, features: ['All modules', 'HWID Protection', '24/7 Support', 'Auto updates', 'Priority support', 'Lifetime updates'] },
    ],
    buy_now: 'BUY NOW',
    testimonials_label: 'TESTIMONIALS',
    testimonials_title: 'What <span>Players</span> Say',
    testimonials: [
      { name: 'xXDarkWarrior', tag: 'HyPix Pro Player', text: '"GoreKthron is the best thing that ever happened to me. 0 bans in 3 months, smooth performance, stunning design."', rating: 5, letter: 'D' },
      { name: 'CryptoSlayer99', tag: 'PvP Enthusiast', text: '"MaceHelper completely changed my game. Nothing else comes close. I recommend it to everyone without exception."', rating: 5, letter: 'C' },
      { name: 'NightShadow_MC', tag: 'Competitive Player', text: '"Tried many clients — GoreKthron is in a league of its own. FPS up 60%, bypass works flawlessly."', rating: 5, letter: 'N' },
      { name: 'VoidStriker', tag: 'UHC Veteran', text: '"Bought lifetime without hesitation. Beautiful design, modules work great, support responds fast."', rating: 5, letter: 'V' },
      { name: 'PixelReaper', tag: 'Bedwars Main', text: '"After GoreKthron I can\'t play without it. AutoSprint and NoFall are must-haves for any PvP."', rating: 5, letter: 'P' },
    ],
    faq_label: 'FAQ',
    faq_title: 'Common <span>Questions</span>',
    faqs: [
      { q: 'Can I get banned?', a: 'GoreKthron uses advanced anticheat bypass techniques. Our track record shows 0 detections. We still recommend caution on servers with manual moderation.' },
      { q: 'How do I receive my license after payment?', a: 'After successful payment, you will receive an email with activation instructions. The license is automatically bound to your HWID.' },
      { q: 'How do I find my HWID?', a: 'Open cmd and run: wmic csproduct get uuid. Copy the result into the HWID field when purchasing.' },
      { q: 'Which Minecraft versions are supported?', a: 'GoreKthron supports Java Edition 1.8.x — 1.21.x. Regular updates ensure compatibility with new versions.' },
      { q: 'Can I transfer my license to another PC?', a: 'Yes, once per month you can reset your HWID binding through Discord support. Lifetime licenses have unlimited resets.' },
    ],
    footer_tagline: 'The most powerful next-generation Minecraft cheat client.',
    footer_links: 'Links',
    footer_support: 'Support',
    footer_links_items: [{ text: 'Features', href: '#features' }, { text: 'Pricing', href: '#pricing' }, { text: 'FAQ', href: '#faq' }, { text: 'Buy Now', href: 'buy.html' }],
    footer_support_items: [{ text: 'Discord', href: '#' }, { text: 'Email', href: '#' }, { text: 'Telegram', href: '#' }],
    footer_copy: '© 2025 GoreKthron. All rights reserved.',
  }
};

let currentLang = localStorage.getItem('gk_lang') || 'ru';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gk_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
}

function t(key) { return TRANSLATIONS[currentLang][key]; }

// ── THREE.JS PARTICLE SYSTEM ──────────────────────────────────────
let threeScene, threeCamera, threeRenderer, particlesMesh, frameId;
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let morphTime = 0;
let morphShape = 0;

function initThree() {
  const canvas = document.getElementById('canvas-hero');
  if (!canvas || typeof THREE === 'undefined') return;

  const isMobile = window.innerWidth < 768;
  const COUNT = isMobile ? 300 : 700;

  threeScene = new THREE.Scene();
  threeCamera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
  threeCamera.position.z = 5;

  threeRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile });
  threeRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ── Positions for 3 shapes ──
  function spherePos(i) {
    const phi = Math.acos(-1 + (2 * i) / COUNT);
    const theta = Math.sqrt(COUNT * Math.PI) * phi;
    const r = 2.2;
    return [r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi)];
  }

  function helixPos(i) {
    const t2 = (i / COUNT) * Math.PI * 8 - Math.PI * 4;
    const r = 1.8;
    return [r * Math.cos(t2), (i / COUNT) * 4 - 2, r * Math.sin(t2)];
  }

  function crystalPos(i) {
    const angle = (i / COUNT) * Math.PI * 2;
    const tier = Math.floor(i / (COUNT / 6));
    const r = [2.2, 1.6, 1.0, 1.6, 2.2, 2.4][Math.min(tier, 5)];
    const y = [-2, -1.2, -0.2, 0.6, 1.4, 2.2][Math.min(tier, 5)];
    return [r * Math.cos(angle + tier * 0.4), y, r * Math.sin(angle + tier * 0.4)];
  }

  const posA = new Float32Array(COUNT * 3);
  const posB = new Float32Array(COUNT * 3);
  const posC = new Float32Array(COUNT * 3);
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    const [ax, ay, az] = spherePos(i);
    const [bx, by, bz] = helixPos(i);
    const [cx, cy, cz] = crystalPos(i);
    posA[i*3]=ax; posA[i*3+1]=ay; posA[i*3+2]=az;
    posB[i*3]=bx; posB[i*3+1]=by; posB[i*3+2]=bz;
    posC[i*3]=cx; posC[i*3+1]=cy; posC[i*3+2]=cz;
    positions[i*3]=ax; positions[i*3+1]=ay; positions[i*3+2]=az;
    const t3 = Math.random();
    if (t3 < 0.6) { colors[i*3]=0.71; colors[i*3+1]=0.3; colors[i*3+2]=1.0; }
    else if (t3 < 0.85) { colors[i*3]=0.83; colors[i*3+1]=0.53; colors[i*3+2]=1.0; }
    else { colors[i*3]=1.0; colors[i*3+1]=1.0; colors[i*3+2]=1.0; }
    sizes[i] = Math.random() * 2 + 1;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float time;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float a = 1.0 - smoothstep(0.3, 0.5, d);
        gl_FragColor = vec4(vColor, a);
      }
    `,
    transparent: true,
    vertexColors: true,
    depthWrite: false,
  });

  particlesMesh = new THREE.Points(geo, mat);
  threeScene.add(particlesMesh);

  // Connection lines (limited for perf)
  if (!isMobile) {
    const lineMat = new THREE.LineBasicMaterial({ color: 0x7B2D8E, transparent: true, opacity: 0.15 });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < Math.min(COUNT, 80); i++) {
      for (let j = i + 1; j < Math.min(COUNT, 80); j++) {
        const dx = posA[i*3]-posA[j*3], dy = posA[i*3+1]-posA[j*3+1], dz = posA[i*3+2]-posA[j*3+2];
        if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 0.8) {
          linePositions.push(posA[i*3],posA[i*3+1],posA[i*3+2],posA[j*3],posA[j*3+1],posA[j*3+2]);
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    threeScene.add(new THREE.LineSegments(lineGeo, lineMat));
  }

  const shapes = [posA, posB, posC];
  let clock = new THREE.Clock();
  const MORPH_DURATION = 3;
  const HOLD_DURATION = 5;
  let phase = 'hold', phaseTime = 0, fromShape = 0, toShape = 1;

  function animate() {
    frameId = requestAnimationFrame(animate);
    const delta = clock.getDelta();
    mat.uniforms.time.value += delta;
    phaseTime += delta;

    // Morphing
    if (phase === 'hold' && phaseTime > HOLD_DURATION) {
      phase = 'morph'; phaseTime = 0;
      toShape = (fromShape + 1) % 3;
    }
    if (phase === 'morph') {
      const progress = Math.min(phaseTime / MORPH_DURATION, 1);
      const eased = progress < 0.5 ? 2*progress*progress : -1+(4-2*progress)*progress;
      const src = shapes[fromShape], dst = shapes[toShape];
      const pos = geo.attributes.position.array;
      for (let i = 0; i < COUNT * 3; i++) pos[i] = src[i] + (dst[i] - src[i]) * eased;
      geo.attributes.position.needsUpdate = true;
      if (progress >= 1) { phase = 'hold'; phaseTime = 0; fromShape = toShape; }
    }

    // Rotation
    targetRotation.y += (mouse.x * 0.5 - targetRotation.y) * 0.05;
    targetRotation.x += (-mouse.y * 0.3 - targetRotation.x) * 0.05;
    particlesMesh.rotation.y += (targetRotation.y - particlesMesh.rotation.y) * 0.08 + 0.003;
    particlesMesh.rotation.x += (targetRotation.x - particlesMesh.rotation.x) * 0.08;

    threeRenderer.render(threeScene, threeCamera);
  }

  animate();

  window.addEventListener('resize', () => {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    threeCamera.aspect = w / h;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(w, h);
  });
}

document.addEventListener('mousemove', e => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// ── NAV ───────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER ─────────────────────────────────────────────────────
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (!btn) return;
  btn.addEventListener('click', () => menu.classList.add('open'));
  close?.addEventListener('click', () => menu.classList.remove('open'));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// ── RIPPLE ────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-primary, .btn-buy, .btn-purchase, .btn-secondary');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const r = document.createElement('span');
  r.classList.add('ripple-effect');
  const size = Math.max(rect.width, rect.height);
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
});

// ── STATS COUNTER ─────────────────────────────────────────────────
function animateCounter(el, target, suffix, duration = 1800) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initStats() {
  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target.querySelector('.stat-number');
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  cards.forEach(c => obs.observe(c));
}

// ── CAROUSEL ──────────────────────────────────────────────────────
let carouselIndex = 0;
let carouselTimer;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  function goTo(idx) {
    slides.forEach((s, i) => {
      s.style.opacity = i === idx ? '1' : '0';
      s.style.transform = i === idx ? 'scale(1)' : 'scale(0.85)';
      s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      s.style.pointerEvents = i === idx ? 'all' : 'none';
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    carouselIndex = idx;
  }

  slides.forEach((s, i) => {
    s.style.position = 'absolute'; s.style.inset = '0';
    s.style.display = 'flex'; s.style.alignItems = 'center'; s.style.justifyContent = 'center';
    s.style.opacity = i === 0 ? '1' : '0';
    s.style.transform = i === 0 ? 'scale(1)' : 'scale(0.85)';
    s.style.pointerEvents = i === 0 ? 'all' : 'none';
  });

  document.querySelector('.carousel-prev')?.addEventListener('click', () => {
    clearInterval(carouselTimer);
    goTo((carouselIndex - 1 + slides.length) % slides.length);
    startAuto();
  });
  document.querySelector('.carousel-next')?.addEventListener('click', () => {
    clearInterval(carouselTimer);
    goTo((carouselIndex + 1) % slides.length);
    startAuto();
  });

  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(carouselTimer); goTo(i); startAuto(); }));

  function startAuto() {
    carouselTimer = setInterval(() => goTo((carouselIndex + 1) % slides.length), 4000);
  }

  startAuto();
}

// ── FEATURE CARD 3D TILT ─────────────────────────────────────────
function initTiltCards() {
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── FAQ ───────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-in').forEach(el => obs.observe(el));
}

// ── TRANSLATION ENGINE ────────────────────────────────────────────
function applyTranslations() {
  const T = TRANSLATIONS[currentLang];
  if (!T) return;

  // Nav
  const navLinks = document.querySelectorAll('[data-i18n]');
  navLinks.forEach(el => {
    const key = el.dataset.i18n;
    if (T[key] !== undefined) el.innerHTML = T[key];
  });

  // Features
  const featGrid = document.querySelector('.features-grid');
  if (featGrid) {
    featGrid.innerHTML = T.features.map((f, i) => `
      <div class="feature-card animate-in" style="transition-delay:${i*60}ms">
        <div class="feature-icon"><span class="${f.anim}">${f.icon}</span></div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>`).join('');
    initTiltCards();
    document.querySelectorAll('.feature-card').forEach(el => {
      new IntersectionObserver(([e]) => { if(e.isIntersecting){e.target.classList.add('visible')} }, {threshold:0.1}).observe(el);
    });
  }

  // Stats
  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    statsGrid.innerHTML = T.stats.map(s => `
      <div class="stat-card animate-in">
        <div class="stat-number" data-target="${s.num}" data-suffix="${s.suffix}">${s.num}${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
    initStats();
  }

  // Carousel
  const carouselInner = document.querySelector('.carousel-3d');
  const dotsContainer = document.querySelector('.carousel-dots');
  if (carouselInner) {
    carouselInner.innerHTML = T.slides.map((s, i) => `
      <div class="carousel-slide">
        <div class="slide-card">
          <div class="slide-placeholder">
            <div class="slide-icon">${s.icon}</div>
            <div class="slide-title">${s.title}</div>
            <div class="slide-sub">${s.sub}</div>
          </div>
          <div class="slide-overlay"></div>
          <div class="slide-info"><h3>${s.title}</h3><p>${s.sub}</p></div>
        </div>
      </div>`).join('');
    if (dotsContainer) {
      dotsContainer.innerHTML = T.slides.map((_, i) => `<div class="carousel-dot${i===0?' active':''}" data-i="${i}"></div>`).join('');
    }
    clearInterval(carouselTimer);
    initCarousel();
  }

  // Pricing
  const pricingGrid = document.querySelector('.pricing-grid');
  if (pricingGrid) {
    pricingGrid.innerHTML = T.plans.map((p, i) => `
      <div class="pricing-card${p.badge?' popular':''} animate-in" style="transition-delay:${i*100}ms">
        ${p.badge ? `<div class="popular-badge">${p.badge}</div>` : ''}
        <div class="pricing-plan">${p.name}</div>
        <div class="pricing-price">
          <span class="price-currency">$</span><span class="price-amount">${p.price}</span>
        </div>
        <div class="price-period">${p.period}</div>
        <ul class="pricing-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="buy.html?plan=${i}" class="btn-buy">${T.buy_now}</a>
      </div>`).join('');
  }

  // Testimonials
  const track = document.querySelector('.testimonials-track');
  if (track) {
    const items = [...T.testimonials, ...T.testimonials];
    track.innerHTML = items.map(t2 => `
      <div class="testimonial-card">
        <div class="testimonial-header">
          <div class="testimonial-avatar">${t2.letter}</div>
          <div class="testimonial-info"><h4>${t2.name}</h4><span>${t2.tag}</span></div>
        </div>
        <div class="testimonial-stars">${'★'.repeat(t2.rating)}</div>
        <p class="testimonial-text">${t2.text}</p>
      </div>`).join('');
  }

  // FAQ
  const faqList = document.querySelector('.faq-list');
  if (faqList) {
    faqList.innerHTML = T.faqs.map(f => `
      <div class="faq-item animate-in">
        <div class="faq-question">
          <span>${f.q}</span>
          <div class="faq-icon">+</div>
        </div>
        <div class="faq-answer"><p>${f.a}</p></div>
      </div>`).join('');
    initFAQ();
    document.querySelectorAll('.faq-item').forEach(el => {
      new IntersectionObserver(([e]) => { if(e.isIntersecting){e.target.classList.add('visible')} }, {threshold:0.1}).observe(el);
    });
  }

  // Footer
  const footerLinks = document.querySelector('.footer-links-list');
  if (footerLinks) footerLinks.innerHTML = T.footer_links_items.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('');
  const footerSupport = document.querySelector('.footer-support-list');
  if (footerSupport) footerSupport.innerHTML = T.footer_support_items.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('');

  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) footerCopy.textContent = T.footer_copy;

  initScrollAnimations();
}

// ══════════════════════════════════════════════════════════════════
// BUY PAGE LOGIC
// ══════════════════════════════════════════════════════════════════
function initBuyPage() {
  if (!document.querySelector('.buy-page-wrap')) return;

  // Plan selection
  const planCards = document.querySelectorAll('.plan-card');
  const prices = ['9.99', '19.99', '49.99'];
  const planNames = { ru: ['30 Дней', '90 Дней', 'Навсегда'], en: ['30 Days', '90 Days', 'Lifetime'] };

  // Load plan from URL
  const urlPlan = new URLSearchParams(window.location.search).get('plan');
  let selectedPlan = urlPlan !== null ? parseInt(urlPlan) : 1;
  if (isNaN(selectedPlan) || selectedPlan < 0 || selectedPlan > 2) selectedPlan = 1;

  function selectPlan(idx) {
    selectedPlan = idx;
    planCards.forEach((c, i) => c.classList.toggle('selected', i === idx));
    planCards.forEach((c, i) => {
      const check = c.querySelector('.plan-check');
      if (check) check.textContent = i === idx ? '✓' : '';
    });
    updateSummary();
  }

  planCards.forEach((card, i) => {
    card.addEventListener('click', () => selectPlan(i));
  });

  selectPlan(selectedPlan);

  function updateSummary() {
    const pnEl = document.querySelector('.summary-plan');
    const pvEl = document.querySelector('.summary-total');
    const T = TRANSLATIONS[currentLang];
    if (pnEl) pnEl.textContent = planNames[currentLang]?.[selectedPlan] || planNames.en[selectedPlan];
    if (pvEl) pvEl.textContent = '$' + prices[selectedPlan];
  }

  updateSummary();

  // Payment method
  const payCards = document.querySelectorAll('.payment-card');
  const cryptoDetails = document.querySelector('.crypto-details');
  let selectedMethod = 0;

  function selectMethod(idx) {
    selectedMethod = idx;
    payCards.forEach((c, i) => c.classList.toggle('selected', i === idx));
    if (cryptoDetails) cryptoDetails.classList.toggle('show', idx === 0);
  }

  payCards.forEach((c, i) => c.addEventListener('click', () => selectMethod(i)));
  selectMethod(0);

  // Copy addresses
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.previousElementSibling?.textContent;
      if (!code) return;
      navigator.clipboard.writeText(code.trim()).then(() => {
        btn.textContent = '✓ Copied';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      }).catch(() => {});
    });
  });

  // Form validation
  const form = document.querySelector('.checkout-form');
  const purchaseBtn = document.querySelector('.btn-purchase');

  purchaseBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    purchaseBtn.classList.add('loading');
    await new Promise(r => setTimeout(r, 2200));
    purchaseBtn.classList.remove('loading');
    showSuccess();
  });

  function validateForm() {
    let valid = true;
    const required = form?.querySelectorAll('input[required]') || [];
    required.forEach(input => {
      input.classList.remove('error');
      if (!input.value.trim()) {
        input.classList.add('error');
        valid = false;
      }
    });
    const emailInput = form?.querySelector('input[type="email"]');
    if (emailInput && emailInput.value && !emailInput.value.includes('@')) {
      emailInput.classList.add('error');
      valid = false;
    }
    return valid;
  }

  // HWID tooltip
  document.querySelector('.tooltip-btn')?.addEventListener('click', () => {
    alert(currentLang === 'ru'
      ? 'Откройте командную строку (Win+R → cmd) и введите:\nwmic csproduct get uuid\n\nСкопируйте результат в поле HWID.'
      : 'Open command prompt (Win+R → cmd) and type:\nwmic csproduct get uuid\n\nCopy the result into the HWID field.');
  });

  // Success
  function showSuccess() {
    const overlay = document.querySelector('.success-overlay');
    if (overlay) overlay.classList.add('show');
  }

  document.querySelector('.success-close')?.addEventListener('click', () => {
    document.querySelector('.success-overlay')?.classList.remove('show');
  });

  // Buy page i18n
  function applyBuyTranslations() {
    updateSummary();
  }

  window._buyLangUpdate = applyBuyTranslations;
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Lang switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      window._buyLangUpdate?.();
    });
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  applyTranslations();
  initHamburger();
  initBuyPage();

  // Three.js lazy load
  if (document.getElementById('canvas-hero')) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initThree;
    document.head.appendChild(script);
  }
});
