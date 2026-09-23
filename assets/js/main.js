'use strict';

const COMPANY = {
  name: 'Megha Compusoft Pvt. Ltd.',
  shortName: 'MCPL',
  tagline: 'Software | Solution | Infrastructure | Surveillance',
  phone1: '+91 7666999332',
  phoneRaw: '917666999332',
  email: 'sales@mcplmail.com',
  website: 'www.mcplsoftware.com',
  address: '201, A-Wing, Shubham Centre CHS, Cardinal Gracious Road, Chakala, Andheri (E), Mumbai - 400099'
};

const productMenu = `
  <div class="mega-grid">
    <div class="mega-col">
      <h4>Business Software</h4>
      <span class="mega-subtitle">Buy TallyPrime License</span>
      <a href="tally-prime-gold.html">TallyPrime Gold</a>
      <a href="tally-prime-silver.html">TallyPrime Silver</a>
      <a href="tally-prime-auditor.html">TallyPrime Auditor</a>
    </div>
    <div class="mega-col">
      <h4>Tally Software Services (TSS)</h4>
      <a href="tss-single-user.html">TSS Single User</a>
      <a href="tss-multi-user.html">TSS Multi User</a>
      <a href="tss-auditor-edition.html">TSS Auditor Edition</a>
      <a href="tally-ira.html">Docs by Ira</a>
    </div>
    <div class="mega-col">
      <h4>IT Infrastructure</h4>
      <a href="products.html#computing">Desktops & Laptops</a>
      <a href="products.html#servers">Servers & Storage</a>
      <a href="products.html#networking">Networking & Firewall</a>
      <a href="products.html#power">UPS & Power Backup</a>
    </div>
    <div class="mega-col">
      <h4>Cloud, Security & Services</h4>
      <a href="products.html#cloud">Tally on Cloud</a>
      <a href="products.html#surveillance">CCTV & Surveillance</a>
      <a href="products.html#erp">ERP & Billing Solutions</a>
      <a href="amc.html">AMC</a>
    </div>
  </div>`;

function currentPage() {
  const file = location.pathname.split('/').pop() || 'index.html';
  return file.toLowerCase();
}

function headerMarkup() {
  const page = currentPage();
  const active = target => page === target ? 'active' : '';
  const productPages = ['products.html','tally-prime-silver.html','tally-prime-gold.html','tally-prime-auditor.html','tally-ira.html','tss-single-user.html','tss-multi-user.html','tss-auditor-edition.html','amc.html'];
  const productsActive = productPages.includes(page) ? 'active' : '';
  return `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-links"><span>End-to-end IT solutions for growing businesses</span></div>
        <div class="topbar-links">
          <a href="tel:${COMPANY.phoneRaw}">☎ ${COMPANY.phone1}</a>
          <a href="mailto:${COMPANY.email}">✉ ${COMPANY.email}</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="MCPL Home">
          <img class="brand-logo-full" src="assets/images/mcpl-company-logo.jpeg" alt="MCPL — Megha Compusoft Pvt. Ltd.">
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
        <nav class="nav" aria-label="Primary navigation">
          <div class="nav-item"><a class="nav-link ${active('index.html')}" href="index.html">Home</a></div>
          <div class="nav-item"><a class="nav-link ${active('about.html')}" href="about.html">About</a></div>
          <div class="nav-item has-mega">
            <button class="nav-link ${productsActive}" type="button">Products & Services <span>⌄</span></button>
            <div class="mega-menu">${productMenu}</div>
          </div>
          <div class="nav-item"><a class="nav-link ${active('contact.html')}" href="contact.html">Contact</a></div>
        </nav>
        <div class="header-actions">
          <a class="btn btn-outline btn-sm" href="support.html">Raise Ticket</a>
          <button class="btn btn-primary btn-sm" type="button" data-open-modal="enquiryModal">Talk to Expert</button>
        </div>
      </div>
    </header>`;
}

function footerMarkup() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-col">
          <div class="footer-brand"><img src="assets/images/logo.svg" alt="MCPL"><div><strong>${COMPANY.name}</strong><div class="small">${COMPANY.tagline}</div></div></div>
          <p>Business software, IT infrastructure, cloud, networking, surveillance and dependable support from one technology partner.</p>
          <p class="small">${COMPANY.address}</p>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <a href="tally-prime-silver.html">TallyPrime Silver</a>
          <a href="products.html#computing">Hardware</a>
          <a href="products.html#networking">Networking</a>
          <a href="products.html#surveillance">Surveillance</a>
          <a href="services.html#custom">Software Development</a>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <a href="services.html">Services</a>
          <a href="amc.html">AMC Plans</a>
          <a href="support.html">Raise Complaint</a>
          <a href="mailto:${COMPANY.email}">Email Sales</a>
          <a href="contact.html">Talk to Expert</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="tel:${COMPANY.phoneRaw}">${COMPANY.phone1}</a>
          <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
          <a href="https://wa.me/${COMPANY.phoneRaw}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${year} ${COMPANY.name}. All rights reserved.</span>
        <span>Privacy Policy · Terms · Sitemap</span>
      </div>
    </footer>
    <div class="scroll-progress" aria-hidden="true"><span></span></div>
    <button class="back-to-top" type="button" aria-label="Back to top">↑</button>
    <div class="floating-actions" aria-label="Quick contact">
      <a class="floating-btn whatsapp" href="https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(`Hello MCPL, I am visiting the ${document.title} page and would like more information.`)}" target="_blank" rel="noopener" aria-label="WhatsApp MCPL">◉</a>
      <a class="floating-btn call" href="tel:${COMPANY.phoneRaw}" aria-label="Call MCPL">☎</a>
    </div>`;
}

function enquiryModalMarkup() {
  return `
    <div class="modal" id="enquiryModal" role="dialog" aria-modal="true" aria-labelledby="enquiryModalTitle">
      <div class="modal-dialog">
        <div class="modal-head">
          <div><span class="eyebrow">Quick Enquiry</span><h2 id="enquiryModalTitle">Talk to an MCPL expert</h2><p class="muted">Share your requirement and our team will contact you.</p></div>
          <button class="modal-close" type="button" data-close-modal aria-label="Close">×</button>
        </div>
        <form data-api-form="/api/enquiries">
          <input type="hidden" name="sourcePage" value="Quick Enquiry Modal">
          <div class="form-grid">
            <div class="form-group"><label>Name *</label><input name="name" required></div>
            <div class="form-group"><label>Phone *</label><input name="phone" inputmode="tel" required></div>
            <div class="form-group"><label>Business email *</label><input type="email" name="email" required></div>
            <div class="form-group"><label>Company *</label><input name="company" required></div>
            <div class="form-group"><label>City</label><input name="city"></div>
            <div class="form-group"><label>Interested in</label><select name="interest"><option>Tally & Business Software</option><option>Hardware & Infrastructure</option><option>Cloud & Backup</option><option>Networking & Security</option><option>CCTV & Surveillance</option><option>AMC & Support</option><option>Custom Software</option></select></div>
            <div class="form-group full"><label>Requirement *</label><textarea name="requirement" required></textarea></div>
            <div class="form-group full"><button class="btn btn-primary btn-block" type="submit">Submit Enquiry</button><div class="form-message" role="status"></div></div>
          </div>
        </form>
      </div>
    </div>`;
}

function setupNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
  }
  document.querySelectorAll('.has-mega > .nav-link').forEach(button => {
    button.addEventListener('click', event => {
      if (window.innerWidth <= 860) {
        event.preventDefault();
        button.parentElement.classList.toggle('open');
      } else {
        location.href = 'products.html';
      }
    });
  });
}

function setupModals() {
  document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.dataset.openModal);
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.querySelector('input,select,textarea')?.focus();
      }
    });
  });
  const close = modal => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => close(button.closest('.modal'))));
  document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) close(modal); }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') document.querySelectorAll('.modal.open').forEach(close);
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return items.forEach(item => item.classList.add('visible'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach(item => observer.observe(item));
}

function setupCounters() {
  document.querySelectorAll('[data-counter]').forEach(node => {
    const target = Number(node.dataset.counter || 0);
    const suffix = node.dataset.suffix || '';
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const duration = 1200;
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        node.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && run()), { threshold: .5 });
    observer.observe(node);
  });
}

function setupProductFilters() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  if (!buttons.length || !cards.length) return;
  const search = document.querySelector('[data-product-search]');
  const resultCount = document.querySelector('[data-product-count]');
  const clearButton = document.querySelector('[data-clear-products]');
  const emptyState = document.querySelector('[data-product-empty]');
  let currentFilter = 'all';

  const applyFilter = filter => {
    const validFilter = buttons.some(button => button.dataset.filter === filter) ? filter : 'all';
    currentFilter = validFilter;
    buttons.forEach(item => item.classList.remove('active'));
    buttons.find(button => button.dataset.filter === validFilter)?.classList.add('active');
    const query = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(/\s+/).filter(Boolean);
      const categoryMatch = validFilter === 'all' || categories.includes(validFilter);
      const textMatch = !query || card.textContent.toLowerCase().includes(query);
      card.hidden = !(categoryMatch && textMatch);
      if (!card.hidden) visible += 1;
    });
    if (resultCount) resultCount.textContent = `${visible} solution${visible === 1 ? '' : 's'} found`;
    if (emptyState) emptyState.hidden = visible !== 0;
  };

  const applyHashFilter = () => {
    const targetId = decodeURIComponent(location.hash.slice(1));
    const targetCard = targetId ? document.getElementById(targetId) : null;
    const categories = (targetCard?.dataset.category || '').split(/\s+/).filter(Boolean);
    const hashFilter = categories.find(category => buttons.some(button => button.dataset.filter === category));
    applyFilter(hashFilter || 'all');
  };

  buttons.forEach(button => button.addEventListener('click', () => {
    applyFilter(button.dataset.filter);
  }));
  search?.addEventListener('input', () => applyFilter(currentFilter));
  clearButton?.addEventListener('click', () => {
    if (search) search.value = '';
    applyFilter('all');
    search?.focus();
  });

  applyHashFilter();
  window.addEventListener('hashchange', applyHashFilter);
}

function setupPageChrome() {
  const anchorMap = {
    'contact.html': ['contact-form'],
    'support.html': ['support-ticket'],
    'services.html': ['service-catalogue'],
    'amc.html': ['amc-plans', 'amc-request']
  };
  const pageAnchors = anchorMap[currentPage()] || [];
  document.querySelectorAll('main > .section').forEach((section, index) => {
    if (pageAnchors[index]) section.id = pageAnchors[index];
  });
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress span');
  const backToTop = document.querySelector('.back-to-top');
  const update = () => {
    const top = window.scrollY;
    header?.classList.toggle('is-scrolled', top > 24);
    backToTop?.classList.toggle('visible', top > 500);
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${max > 0 ? Math.min(100, top / max * 100) : 0}%`;
  };
  window.addEventListener('scroll', update, { passive: true });
  backToTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  update();
}

function setupAccordions() {
  document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
}

function setupContextualEnquiries() {
  document.querySelectorAll('[data-enquiry-interest]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.dataset.openModal || 'enquiryModal');
      const select = modal?.querySelector('[name="interest"]');
      const requested = button.dataset.enquiryInterest;
      if (select && requested) {
        const option = [...select.options].find(item => item.text.toLowerCase().includes(requested.toLowerCase()));
        if (option) select.value = option.value;
      }
    });
  });
}

function setupBannerSlider() {
  const slider = document.querySelector('[data-banner-slider]');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.banner-slide')];
  const dotsWrap = slider.querySelector('.banner-dots');
  let current = 0;
  let timer;
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `banner-dot${index === 0 ? ' active' : ''}`;
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show banner ${index + 1}`);
    dot.addEventListener('click', () => show(index, true));
    dotsWrap.appendChild(dot);
  });
  const dots = [...dotsWrap.children];
  function show(index, restart = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    if (restart) start();
  }
  function start() { clearInterval(timer); timer = setInterval(() => show(current + 1), 5500); }
  slider.querySelector('.prev').addEventListener('click', () => show(current - 1, true));
  slider.querySelector('.next').addEventListener('click', () => show(current + 1, true));
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', start);
  start();
}

function setupProductShowcase() {
  const showcase = document.querySelector('[data-product-showcase]');
  if (!showcase) return;
  const slides = [...showcase.querySelectorAll('.ps-slide')];
  const dotsWrap = showcase.querySelector('.ps-dots');
  const previous = showcase.querySelector('.ps-arrow.prev');
  const next = showcase.querySelector('.ps-arrow.next');
  if (!slides.length || !dotsWrap || !previous || !next) return;

  let current = 0;
  let timer;
  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.className = `ps-dot${index === 0 ? ' active' : ''}`;
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show product or service ${index + 1}`);
    dot.addEventListener('click', () => show(index, true));
    dotsWrap.appendChild(dot);
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
  });
  const dots = [...dotsWrap.children];

  function show(index, restart = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    if (restart) start();
  }

  function start() {
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 6500);
  }

  previous.addEventListener('click', () => show(current - 1, true));
  next.addEventListener('click', () => show(current + 1, true));
  showcase.addEventListener('mouseenter', () => clearInterval(timer));
  showcase.addEventListener('mouseleave', start);
  showcase.addEventListener('focusin', () => clearInterval(timer));
  showcase.addEventListener('focusout', start);
  showcase.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(current - 1, true);
    if (event.key === 'ArrowRight') show(current + 1, true);
  });
  start();
}

function init() {
  document.querySelector('[data-site-header]')?.insertAdjacentHTML('afterbegin', headerMarkup());
  document.querySelector('[data-site-footer]')?.insertAdjacentHTML('afterbegin', footerMarkup());
  document.body.insertAdjacentHTML('beforeend', enquiryModalMarkup());
  setupNavigation();
  setupModals();
  setupReveal();
  setupCounters();
  setupProductFilters();
  setupBannerSlider();
  setupProductShowcase();
  setupPageChrome();
  setupAccordions();
  setupContextualEnquiries();
}

document.addEventListener('DOMContentLoaded', init);
