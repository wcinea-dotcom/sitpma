/* ═══════════════════════════════════════════════════
   PMAA HAÏTI — Navigation et Composants Partagés
   ═══════════════════════════════════════════════════ */

const PMAA = {
  currentLang: 'fr',

  // Inject topbar + header into page
  renderNav(activePage) {
    const navItems = [
      { id: 'index',        label: 'Accueil',            href: 'index.html' },
      { id: 'atlas',        label: 'Atlas des Plantes',  href: 'atlas.html' },
      { id: 'sante',        label: 'Santé & Maladies',   href: 'sante.html' },
      { id: 'conservation', label: 'Conservation',        href: 'conservation.html' },
      { id: 'economie',     label: 'Économie',            href: 'economie.html' },
      { id: 'ministeres',   label: 'Ministères',          href: 'ministeres.html' },
      { id: 'tradition',    label: 'Savoir Traditionnel', href: 'tradition.html' },
    ];

    const navHtml = navItems.map(n =>
      `<a class="nav-item${n.id === activePage ? ' active' : ''}" href="${n.href}">${n.label}</a>`
    ).join('');

    document.getElementById('topbar-placeholder').innerHTML = `
      <div class="topbar">
        <div class="topbar-left">
          <span>🌱 Jardin Botanique des Cayes (JBC) · 2025</span>
          <span>|</span>
          <span>📍 Grand Sud & Grand'Anse, Haïti</span>
        </div>
        <div class="topbar-right">
          <span style="font-size:11px;margin-right:4px;">Langue / Language / Lang :</span>
          <a class="lang-btn active" href="#" onclick="PMAA.setLang('fr');return false;">🇫🇷 Français</a>
          <a class="lang-btn" href="#" onclick="PMAA.setLang('en');return false;">🇺🇸 English</a>
          <a class="lang-btn" href="#" onclick="PMAA.setLang('kr');return false;">🇭🇹 Kreyòl</a>
        </div>
      </div>
      <header>
        <div class="header-inner">
          <a class="logo-area" href="index.html">
            <div class="logo-icon">🌿</div>
            <div class="logo-text">
              <h1>PMAA Haïti</h1>
              <p>Atlas Botanique du Grand Sud · JBC</p>
            </div>
          </a>
          <nav>${navHtml}</nav>
          <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="Rechercher..." id="global-search">
          </div>
        </div>
      </header>`;

    // Search shortcut
    document.getElementById('global-search')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const q = e.target.value.trim();
        if (q) window.location.href = `atlas.html?q=${encodeURIComponent(q)}`;
      }
    });
  },

  renderFooter() {
    document.getElementById('footer-placeholder').innerHTML = `
      <section class="cta-section section-gold">
        <div class="sec-tag" style="background:rgba(26,74,46,.15);color:var(--green-dark);">Rejoignez la Communauté</div>
        <h2>Restez Informé · Stay Informed · Rete Enfòme</h2>
        <p>Recevez les nouvelles publications, actualités du JBC et mises à jour de l'Atlas</p>
        <div class="cta-form">
          <input type="email" placeholder="Votre adresse email...">
          <button onclick="alert('Inscription enregistrée — mèsi!')">S'inscrire gratuitement →</button>
        </div>
        <p style="font-size:12px;color:rgba(26,74,46,.6);margin-top:12px;font-family:Arial;">
          3 200+ professionnels, chercheurs et décideurs inscrits · Aucun spam
        </p>
      </section>
      <footer>
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>🌿 PMAA Haïti</h3>
            <p>Plateforme nationale de référence pour les Plantes Médicinales, Aromatiques et Alimentaires
            du Grand Sud. Une initiative du Jardin Botanique des Cayes (JBC), depuis 2003 moteur scientifique
            de la botanique haïtienne.</p>
            <div>
              <span class="partner-logo">🏦 BRH</span>
              <span class="partner-logo">🌱 JBC</span>
              <span class="partner-logo">🌍 BGCI</span>
              <span class="partner-logo">🔬 TRAMIL</span>
            </div>
          </div>
          <div class="footer-col">
            <h4>Modules</h4>
            <a href="atlas.html">Atlas des Plantes</a>
            <a href="sante.html">Santé & Maladies</a>
            <a href="conservation.html">Conservation</a>
            <a href="economie.html">Économie</a>
            <a href="tradition.html">Savoir Traditionnel</a>
          </div>
          <div class="footer-col">
            <h4>Portails</h4>
            <a href="ministeres.html#env">Environnement</a>
            <a href="ministeres.html#sante">Santé Publique</a>
            <a href="ministeres.html#agri">Agriculture</a>
            <a href="ministeres.html#comm">Commerce</a>
            <a href="tradition.html#guerisseurs">Guérisseurs</a>
          </div>
          <div class="footer-col">
            <h4>Ressources</h4>
            <a href="#">Publications TRAMIL</a>
            <a href="#">Pharmacopée nationale</a>
            <a href="#">Guide des protocoles</a>
            <a href="#">Application mobile</a>
            <a href="#">API pour chercheurs</a>
            <a href="#">À propos du JBC</a>
            <a href="#">Contact & Partenariats</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 PMAA Haïti · Jardin Botanique des Cayes · Tous droits réservés</span>
          <div style="display:flex;gap:14px;align-items:center;">
            <span>🇫🇷 Français</span>
            <span style="opacity:.4;">|</span>
            <span>🇺🇸 English</span>
            <span style="opacity:.4;">|</span>
            <span>🇭🇹 Kreyòl</span>
          </div>
        </div>
      </footer>`;
  },

  setLang(lang) {
    this.currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.toLowerCase().includes(lang === 'fr' ? 'français' : lang === 'en' ? 'english' : 'kreyòl'))
        btn.classList.add('active');
    });
    // Could trigger content translation here
    console.log('Language set to:', lang);
  },

  // Animate numbers on scroll
  animateNumbers() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1800;
          const start = performance.now();
          const animate = now => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target * 10) / 10;
            el.textContent = prefix + current.toLocaleString('fr') + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
  },

  // Simple search filter for plant lists
  filterPlants(query) {
    const cards = document.querySelectorAll('.plant-card[data-search]');
    const q = query.toLowerCase();
    cards.forEach(card => {
      const searchable = card.dataset.search.toLowerCase();
      card.style.display = (q === '' || searchable.includes(q)) ? '' : 'none';
    });
  }
};

window.addEventListener('DOMContentLoaded', () => PMAA.animateNumbers());
