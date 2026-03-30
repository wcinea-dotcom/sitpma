/* ═══════════════════════════════════════════════════
   PMAA HAÏTI — Navigation, Traduction & Composants
   Jardin Botanique des Cayes (JBC) · 2025
   ═══════════════════════════════════════════════════ */

const PMAA = {
  currentLang: 'fr',

  /* ── DICTIONNAIRE DE TRADUCTIONS ─────────────────── */
  t: {
    /* Navigation */
    nav_accueil:        { fr: 'Accueil',             en: 'Home',                   kr: 'Akèy' },
    nav_atlas:          { fr: 'Atlas des Plantes',   en: 'Plant Atlas',            kr: 'Atlas Plantes' },
    nav_sante:          { fr: 'Santé & Maladies',    en: 'Health & Diseases',      kr: 'Sante & Maladi' },
    nav_conservation:   { fr: 'Conservation',        en: 'Conservation',           kr: 'Konsèvasyon' },
    nav_economie:       { fr: 'Économie',            en: 'Economy',                kr: 'Ekonomi' },
    nav_ministeres:     { fr: 'Ministères',          en: 'Ministries',             kr: 'Ministè' },
    nav_tradition:      { fr: 'Savoir Traditionnel', en: 'Traditional Knowledge',  kr: 'Konesans Tradisyonèl' },
    nav_search:         { fr: 'Rechercher...',       en: 'Search...',              kr: 'Chèche...' },

    /* Topbar */
    topbar_jbc:         { fr: '🌱 Jardin Botanique des Cayes (JBC) · 2025',
                          en: '🌱 Botanical Garden of Cayes (JBC) · 2025',
                          kr: '🌱 Jaden Botanik Kaye (JBC) · 2025' },
    topbar_region:      { fr: '📍 Grand Sud & Grand\'Anse, Haïti',
                          en: '📍 Grand Sud & Grand\'Anse, Haiti',
                          kr: '📍 Gran Sid & Gran\'Anse, Ayiti' },
    topbar_lang:        { fr: 'Langue / Language / Lang :',
                          en: 'Langue / Language / Lang :',
                          kr: 'Langue / Language / Lang :' },

    /* Logo */
    logo_sub:           { fr: 'Atlas Botanique du Grand Sud · JBC',
                          en: 'Botanical Atlas of the Grand Sud · JBC',
                          kr: 'Atlas Botanik Gran Sid · JBC' },

    /* Hero — index */
    hero_title:         { fr: 'Les Plantes du Grand Sud au Service de la Vie',
                          en: 'Plants of the Grand Sud in Service of Life',
                          kr: 'Plantes Gran Sid yo nan Sèvis Lavi a' },
    hero_sub:           { fr: 'Découvrez le patrimoine botanique extraordinaire du Grand Sud et de la Grand\'Anse d\'Haïti — une ressource vitale pour la santé, l\'économie et la conservation.',
                          en: 'Discover the extraordinary botanical heritage of Haiti\'s Grand Sud and Grand\'Anse — a vital resource for health, economy and conservation.',
                          kr: 'Dekouvri eritaj botanik ekstraòdinè Gran Sid ak Gran\'Anse Ayiti a — yon resous vital pou sante, ekonomi ak konsèvasyon.' },
    btn_atlas:          { fr: 'Explorez l\'Atlas →',     en: 'Explore the Atlas →',    kr: 'Eksplore Atlas la →' },
    btn_min:            { fr: 'Portails Ministériels →', en: 'Ministry Portals →',     kr: 'Pòtay Ministè yo →' },

    /* Stats labels */
    stat_especes:       { fr: 'Espèces végétales recensées', en: 'Documented plant species', kr: 'Espès plant dokumenté' },
    stat_endemisme:     { fr: 'Taux d\'endémisme',           en: 'Endemism rate',             kr: 'To endemis' },
    stat_population:    { fr: 'Population utilise les plantes', en: 'Population uses plants',  kr: 'Popilasyon itilize plantes' },
    stat_plantes:       { fr: 'Plantes documentées Grand Sud', en: 'Documented plants Grand Sud', kr: 'Plantes dokumenté Gran Sid' },

    /* Strip features */
    strip_carte:        { fr: 'Carte Interactive',      en: 'Interactive Map',        kr: 'Kat Entèaktif' },
    strip_maladies:     { fr: 'Plantes & Maladies',     en: 'Plants & Diseases',      kr: 'Plantes & Maladi' },
    strip_encyclop:     { fr: 'Encyclopédie Botanique', en: 'Botanical Encyclopedia', kr: 'Ansiklopedi Botanik' },
    strip_portails:     { fr: 'Portails Ministériels',  en: 'Ministry Portals',       kr: 'Pòtay Ministè' },
    strip_mobile:       { fr: 'Application Mobile',     en: 'Mobile Application',     kr: 'Aplikasyon Mobil' },

    /* Section — Audiences */
    sec_audience_h:     { fr: 'Qui Sommes-Nous Serve',  en: 'Who We Serve',           kr: 'Ki moun nou sèvi' },
    sec_audience_sub:   { fr: 'PMAA facilite la collaboration entre décideurs, praticiens, communautés et chercheurs pour valoriser les plantes du Grand Sud.',
                          en: 'PMAA facilitates collaboration between decision-makers, practitioners, communities and researchers to develop the Grand Sud\'s plants.',
                          kr: 'PMAA fasiliite kolaborasyon ant desidè, pratisyen, kominote ak chèchè pou valorize plantes Gran Sid yo.' },

    /* Section — Modules */
    sec_modules_h:      { fr: 'Explorez Nos Modules',   en: 'Explore Our Modules',    kr: 'Eksplore Modil Nou yo' },
    sec_modules_sub:    { fr: 'Six domaines clés pour comprendre et valoriser les plantes du Grand Sud.',
                          en: 'Six key areas to understand and develop the plants of the Grand Sud.',
                          kr: 'Sis domèn kle pou konprann ak valorize plantes Gran Sid yo.' },

    /* Section — Explorer plantes */
    sec_atlas_h:        { fr: 'Explorer les Plantes',   en: 'Explore the Plants',     kr: 'Eksplore Plantes yo' },
    sec_atlas_sub:      { fr: 'Cherchez par nom commun, scientifique ou propriété. 847 espèces documentées en français, anglais et kreyòl.',
                          en: 'Search by common name, scientific name or property. 847 species documented in French, English and Kreyòl.',
                          kr: 'Chèche pa non komen, syantifik oswa pwopriyete. 847 espès dokumenté an fransè, anglè ak kreyòl.' },
    search_placeholder: { fr: 'Chercher une plante (ex: Moringa, Vétiver)...',
                          en: 'Search a plant (e.g.: Moringa, Vetiver)...',
                          kr: 'Chèche yon plant (eks: Moringa, Vétiver)...' },
    btn_voir_tout:      { fr: 'Voir tous les 847 plantes →', en: 'View all 847 plants →', kr: 'Wè tout 847 plantes yo →' },

    /* Filtres */
    filter_all:         { fr: 'Toutes',       en: 'All',          kr: 'Tout' },
    filter_med:         { fr: 'Médicinale',   en: 'Medicinal',    kr: 'Medikal' },
    filter_aro:         { fr: 'Aromatique',   en: 'Aromatic',     kr: 'Aromatik' },
    filter_ali:         { fr: 'Alimentaire',  en: 'Food',         kr: 'Alimantè' },
    filter_end:         { fr: 'Endémique',    en: 'Endemic',      kr: 'Endemik' },
    filter_men:         { fr: 'Menacée UICN', en: 'IUCN Threatened', kr: 'Menase UICN' },

    /* Section — Maladies */
    sec_dis_h:          { fr: 'Plantes par Catégorie de Maladie',
                          en: 'Plants by Disease Category',
                          kr: 'Plantes pa Kategori Maladi' },
    sec_dis_sub:        { fr: 'Trouvez les plantes du Grand Sud documentées pour traiter 127 catégories de conditions de santé.',
                          en: 'Find plants from the Grand Sud documented to treat 127 health condition categories.',
                          kr: 'Jwenn plantes Gran Sid dokumenté pou trete 127 kategori kondisyon sante.' },
    btn_usages:         { fr: 'Explorer Tous les Usages Thérapeutiques →',
                          en: 'Explore All Therapeutic Uses →',
                          kr: 'Eksplore Tout Itilizasyon Terapetik yo →' },

    /* Section — Ministères */
    sec_min_h:          { fr: 'Portails Ministériels',   en: 'Ministry Portals',      kr: 'Pòtay Ministè yo' },
    sec_min_sub:        { fr: 'Chaque ministère accède aux données spécialisées dont il a besoin pour agir.',
                          en: 'Each ministry accesses the specialized data it needs to act.',
                          kr: 'Chak ministè jwenn done espesyalize li bezwen pou aji.' },
    btn_portail:        { fr: 'Accès Portail →',          en: 'Access Portal →',       kr: 'Aksè Pòtay →' },

    /* Section — Héritage */
    sec_heritage_h:     { fr: 'Trois Héritages Botaniques', en: 'Three Botanical Heritages', kr: 'Twa Eritaj Botanik' },
    heritage_taino_h:   { fr: '🌺 Héritage Taïno',          en: '🌺 Taíno Heritage',          kr: '🌺 Eritaj Taïno' },
    heritage_afri_h:    { fr: '🌿 Héritage Africain',        en: '🌿 African Heritage',         kr: '🌿 Eritaj Afriken' },
    heritage_euro_h:    { fr: '🍃 Héritage Européen',        en: '🍃 European Heritage',        kr: '🍃 Eritaj Ewopeyen' },

    /* CTA / Footer */
    cta_h:              { fr: 'Restez Informé · Stay Informed · Rete Enfòme',
                          en: 'Stay Informed · Restez Informé · Rete Enfòme',
                          kr: 'Rete Enfòme · Restez Informé · Stay Informed' },
    cta_sub:            { fr: 'Recevez les nouvelles publications, actualités du JBC et mises à jour de l\'Atlas',
                          en: 'Receive new publications, JBC news and Atlas updates',
                          kr: 'Resevwa nouvo piblikasyon, aktyalite JBC ak mizajou Atlas la' },
    cta_btn:            { fr: 'S\'inscrire gratuitement →', en: 'Subscribe for free →', kr: 'Enskri gratis →' },
    email_ph:           { fr: 'Votre adresse email...',    en: 'Your email address...', kr: 'Imèl ou...' },
    cta_note:           { fr: '3 200+ professionnels, chercheurs et décideurs inscrits · Aucun spam',
                          en: '3,200+ professionals, researchers and decision-makers subscribed · No spam',
                          kr: '3 200+ pwofesyonèl, chèchè ak desidè enskri · Pa gen spam' },

    /* Footer columns */
    footer_modules:     { fr: 'Modules',    en: 'Modules',   kr: 'Modil yo' },
    footer_portails:    { fr: 'Portails',   en: 'Portals',   kr: 'Pòtay yo' },
    footer_ressources:  { fr: 'Ressources', en: 'Resources', kr: 'Resous yo' },
    footer_copy:        { fr: '© 2025 PMAA Haïti · Jardin Botanique des Cayes · Tous droits réservés',
                          en: '© 2025 PMAA Haiti · Botanical Garden of Cayes · All rights reserved',
                          kr: '© 2025 PMAA Ayiti · Jaden Botanik Kaye · Tout dwa rezève' },

    /* Page hero subtitles */
    atlas_sub:          { fr: '847 espèces documentées du Grand Sud & Grand\'Anse — fiches trilingues avec photos, propriétés, cartes et modes de préparation',
                          en: '847 species documented in the Grand Sud & Grand\'Anse — trilingual sheets with photos, properties, maps and preparation methods',
                          kr: '847 espès dokumenté nan Gran Sid & Gran\'Anse — fich trileng ak foto, pwopriyete, kat ak fason preparasyon' },
  },

  /* ── HELPER: traduit une clé dans la langue courante ─ */
  tr(key) {
    const entry = this.t[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['fr'] || key;
  },

  /* ── RENDER NAV ───────────────────────────────────── */
  renderNav(activePage) {
    this._activePage = activePage;
    const L = this.currentLang;

    const navDefs = [
      { id: 'index',        key: 'nav_accueil',      href: 'index.html' },
      { id: 'atlas',        key: 'nav_atlas',        href: 'atlas.html' },
      { id: 'sante',        key: 'nav_sante',        href: 'sante.html' },
      { id: 'conservation', key: 'nav_conservation', href: 'conservation.html' },
      { id: 'economie',     key: 'nav_economie',     href: 'economie.html' },
      { id: 'ministeres',   key: 'nav_ministeres',   href: 'ministeres.html' },
      { id: 'tradition',    key: 'nav_tradition',    href: 'tradition.html' },
    ];

    const navHtml = navDefs.map(n =>
      `<a class="nav-item${n.id === activePage ? ' active' : ''}" href="${n.href}">${this.tr(n.key)}</a>`
    ).join('');

    document.getElementById('topbar-placeholder').innerHTML = `
      <div class="topbar">
        <div class="topbar-left">
          <span data-i18n="topbar_jbc">${this.tr('topbar_jbc')}</span>
          <span>|</span>
          <span data-i18n="topbar_region">${this.tr('topbar_region')}</span>
        </div>
        <div class="topbar-right">
          <span style="font-size:11px;margin-right:4px;">${this.tr('topbar_lang')}</span>
          <a class="lang-btn${L==='fr'?' active':''}" href="#" onclick="PMAA.setLang('fr');return false;">🇫🇷 Français</a>
          <a class="lang-btn${L==='en'?' active':''}" href="#" onclick="PMAA.setLang('en');return false;">🇺🇸 English</a>
          <a class="lang-btn${L==='kr'?' active':''}" href="#" onclick="PMAA.setLang('kr');return false;">🇭🇹 Kreyòl</a>
        </div>
      </div>
      <header>
        <div class="header-inner">
          <a class="logo-area" href="index.html">
            <div class="logo-icon">🌿</div>
            <div class="logo-text">
              <h1>PMAA Haïti</h1>
              <p data-i18n="logo_sub">${this.tr('logo_sub')}</p>
            </div>
          </a>
          <nav id="main-nav">${navHtml}</nav>
          <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="${this.tr('nav_search')}" id="global-search">
          </div>
        </div>
      </header>`;

    document.getElementById('global-search')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const q = e.target.value.trim();
        if (q) window.location.href = `atlas.html?q=${encodeURIComponent(q)}`;
      }
    });
  },

  /* ── RENDER FOOTER ────────────────────────────────── */
  renderFooter() {
    document.getElementById('footer-placeholder').innerHTML = `
      <section class="cta-section section-gold">
        <div class="sec-tag" style="background:rgba(26,74,46,.15);color:var(--green-dark);" data-i18n="cta_sub">${this.tr('cta_sub')}</div>
        <h2 data-i18n="cta_h">${this.tr('cta_h')}</h2>
        <p data-i18n="cta_sub">${this.tr('cta_sub')}</p>
        <div class="cta-form">
          <input type="email" placeholder="${this.tr('email_ph')}" data-i18n-ph="email_ph">
          <button onclick="alert('Inscription enregistrée — mèsi!')" data-i18n="cta_btn">${this.tr('cta_btn')}</button>
        </div>
        <p style="font-size:12px;color:rgba(26,74,46,.6);margin-top:12px;font-family:Arial;" data-i18n="cta_note">${this.tr('cta_note')}</p>
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
            <h4 data-i18n="footer_modules">${this.tr('footer_modules')}</h4>
            <a href="atlas.html" data-i18n="nav_atlas">${this.tr('nav_atlas')}</a>
            <a href="sante.html" data-i18n="nav_sante">${this.tr('nav_sante')}</a>
            <a href="conservation.html" data-i18n="nav_conservation">${this.tr('nav_conservation')}</a>
            <a href="economie.html" data-i18n="nav_economie">${this.tr('nav_economie')}</a>
            <a href="tradition.html" data-i18n="nav_tradition">${this.tr('nav_tradition')}</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_portails">${this.tr('footer_portails')}</h4>
            <a href="ministeres.html#env">Environnement</a>
            <a href="ministeres.html#sante">Santé Publique</a>
            <a href="ministeres.html#agri">Agriculture</a>
            <a href="ministeres.html#comm">Commerce</a>
            <a href="tradition.html#guerisseurs">Guérisseurs</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_ressources">${this.tr('footer_ressources')}</h4>
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
          <span data-i18n="footer_copy">${this.tr('footer_copy')}</span>
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

  /* ── SET LANG — traduit toute la page ─────────────── */
  setLang(lang) {
    this.currentLang = lang;

    /* 1. Mettre à jour les boutons de langue */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      const txt = btn.textContent.toLowerCase();
      if ((lang === 'fr' && txt.includes('français')) ||
          (lang === 'en' && txt.includes('english')) ||
          (lang === 'kr' && txt.includes('kreyòl')))
        btn.classList.add('active');
    });

    /* 2. Traduire tous les éléments [data-i18n] */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const translated = this.tr(key);
      if (translated && translated !== key) {
        /* Conserver les balises HTML internes (spans, etc.) */
        if (el.children.length === 0) {
          el.textContent = translated;
        } else {
          /* Pour les éléments avec enfants (h2 trilingue), remplacer seulement le texte */
          el.innerHTML = translated;
        }
      }
    });

    /* 3. Traduire les placeholders [data-i18n-ph] */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      const translated = this.tr(key);
      if (translated) el.placeholder = translated;
    });

    /* 4. Re-rendre la nav avec la bonne langue */
    if (this._activePage) {
      this.renderNav(this._activePage);
      this.renderFooter();
      /* Réappliquer toutes les traductions après re-render */
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translated = this.tr(key);
        if (translated && translated !== key) {
          if (el.children.length === 0) el.textContent = translated;
          else el.innerHTML = translated;
        }
      });
    }

    /* 5. Sauvegarder le choix de langue en session */
    try { sessionStorage.setItem('pmaa_lang', lang); } catch(e) {}
  },

  /* ── ANIMATE NUMBERS ──────────────────────────────── */
  animateNumbers() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          if (isNaN(target)) return;
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

  /* ── FILTER PLANTS ────────────────────────────────── */
  filterPlants(query) {
    const cards = document.querySelectorAll('.plant-card[data-search]');
    const q = query.toLowerCase();
    cards.forEach(card => {
      const searchable = card.dataset.search.toLowerCase();
      card.style.display = (q === '' || searchable.includes(q)) ? '' : 'none';
    });
  },

  filterByCategory(cat) {
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    const cards = document.querySelectorAll('.plant-card[data-search]');
    cards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.categories?.includes(cat)) ? '' : 'none';
    });
  }
};

/* ── INIT ─────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  /* Restaurer la langue sauvegardée */
  try {
    const saved = sessionStorage.getItem('pmaa_lang');
    if (saved && saved !== 'fr') PMAA.setLang(saved);
  } catch(e) {}
  PMAA.animateNumbers();
});
