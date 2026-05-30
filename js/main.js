// ============================================
// BISTRÔ PETISCARIA — Main JS
// ============================================

(function () {
  'use strict';

  // ---- DOM Ready ----
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavbar();
    initMobileMenu();
    initMenuTabs();
    initScrollReveal();
    buildEvents();
    buildMenuItems();
    buildGallery();
    buildHorarios();
  }

  // ============================================
  // NAVBAR — scroll state
  // ============================================
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================
  // MOBILE MENU — drawer
  // ============================================
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const drawer    = document.getElementById('navDrawer');
    const overlay   = document.getElementById('navOverlay');
    const closeLinks = document.querySelectorAll('.nav-drawer__link');

    if (!hamburger || !drawer || !overlay) return;

    const open = () => {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      isOpen ? close() : open();
    });

    overlay.addEventListener('click', close);

    closeLinks.forEach(link => {
      link.addEventListener('click', close);
    });
  }

  // ============================================
  // MENU TABS — category switching
  // ============================================
  function initMenuTabs() {
    const buttons = document.querySelectorAll('.menu-nav__btn');
    const items   = document.querySelectorAll('.menu-item');

    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;

        // Active state on button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide items
        items.forEach(item => {
          if (item.dataset.cat === cat) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });
  }

  // ============================================
  // SCROLL REVEAL — intersection observer
  // ============================================
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger by index within parent
            const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 80}ms`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(el => observer.observe(el));
  }

  // ============================================
  // BUILD — Events from DATA
  // ============================================
  function buildEvents() {
    const container = document.getElementById('eventsRow');
    if (!container || !DATA.eventos) return;

    DATA.eventos.forEach(ev => {
      const card = document.createElement('article');
      card.className = 'event-card reveal';
      card.innerHTML = `
        <div class="event-card__image">
          <img
            src="${ev.imagem}"
            alt="${ev.titulo}"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80'"
          />
          <div class="event-card__date-badge">
            <span class="event-card__date-day">${ev.data_dia}</span>
            <span class="event-card__date-month">${ev.data_mes}</span>
          </div>
        </div>
        <div class="event-card__body">
          <div class="event-card__tag">
            <span class="tag tag--gold">${ev.tag}</span>
          </div>
          <h3 class="event-card__title">${ev.titulo}</h3>
          <p class="event-card__time">
            <svg viewBox="0 0 24 24" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${ev.horario} · ${ev.data_dia}/${ev.data_mes}
          </p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ============================================
  // BUILD — Menu items from DATA
  // ============================================
  function buildMenuItems() {
    const container = document.getElementById('menuGrid');
    if (!container || !DATA.cardapio) return;

    DATA.cardapio.forEach(item => {
      const el = document.createElement('article');
      el.className = 'menu-item reveal';
      el.dataset.cat = item.categoria;

      // First category active by default
      if (item.categoria === DATA.categorias[0].id) {
        el.classList.add('active');
      }

      el.innerHTML = `
        <div class="menu-item__image">
          <img
            src="${item.imagem}"
            alt="${item.nome}"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'"
          />
        </div>
        <div class="menu-item__body">
          <h4 class="menu-item__name">${item.nome}</h4>
          <p class="menu-item__desc">${item.descricao}</p>
          <div class="menu-item__footer">
            <span class="menu-item__price">${item.preco}</span>
            <button class="menu-item__add" aria-label="Adicionar ${item.nome} ao pedido" title="Pedir pelo WhatsApp">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Add button → WhatsApp
      el.querySelector('.menu-item__add').addEventListener('click', () => {
        const msg = encodeURIComponent(`Olá! Gostaria de pedir: *${item.nome}* (${item.preco})`);
        window.open(`https://wa.me/5534999999999?text=${msg}`, '_blank');
      });

      container.appendChild(el);
    });

    // Build menu nav buttons
    buildMenuNav();
  }

  function buildMenuNav() {
    const nav = document.getElementById('menuNav');
    if (!nav || !DATA.categorias) return;

    DATA.categorias.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'menu-nav__btn' + (i === 0 ? ' active' : '');
      btn.dataset.cat = cat.id;
      btn.textContent = cat.label;
      nav.appendChild(btn);
    });

    // Re-init tabs after building
    initMenuTabs();
  }

  // ============================================
  // BUILD — Gallery from DATA
  // ============================================
  function buildGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container || !DATA.galeria) return;

    DATA.galeria.forEach(foto => {
      const item = document.createElement('div');
      item.className = 'gallery-item reveal';
      item.innerHTML = `
        <img
          src="${foto.imagem}"
          alt="${foto.alt}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'"
        />
        <div class="gallery-item__overlay"></div>
      `;
      container.appendChild(item);
    });
  }

  // ============================================
  // BUILD — Horários from DATA
  // ============================================
  function buildHorarios() {
    const container = document.getElementById('horariosContainer');
    if (!container || !DATA.restaurante) return;

    const { horarios } = DATA.restaurante;
    if (!horarios) return;

    container.innerHTML = horarios.map(h => `
      <div class="hours-row">
        <span>${h.dia}</span>
        <span>${h.hora}</span>
      </div>
    `).join('');
  }

})();
