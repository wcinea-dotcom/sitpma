// ============================================================
// main.js — Atlas des Plantes du Grand Sud d'Haïti
// Gère : rendu des cartes, modal, filtres, menu mobile
// ============================================================

// ---- Langue courante (compatible PMAA et mode standalone) ---
function getCurrentLang() {
    // PMAA context
    if (typeof PMAA !== 'undefined' && PMAA.currentLang) return PMAA.currentLang === 'kr' ? 'ht' : PMAA.currentLang;
    // Standalone context
    return window.currentLang || 'fr';
}

// ---- Placeholder SVG (global, pas de requête réseau) -------
const placeholderSVG = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23e8f5e9"/><g transform="translate(200,110)"><path d="M0,-45C30,-30 50,0 35,30C20,60 0,40 0,40C0,40-20,60-35,30C-50,0-30,-30 0,-45Z" fill="%234caf50" opacity=".6"/><line x1="0" y1="20" x2="0" y2="65" stroke="%232c5e3b" stroke-width="3"/></g><text x="200" y="210" text-anchor="middle" font-family="Arial" font-size="13" fill="%232c5e3b" font-weight="bold">Photo non disponible</text></svg>')}`;

// ---- Rendu de la grille de plantes -------------------------

function renderPlantes(plantesToRender) {
    const grid = document.getElementById('resultatsGrid');
    const countEl = document.getElementById('resultCount');
    if (!grid) return;

    if (!plantesToRender || plantesToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16 text-gray-400">
                <i class="fa-solid fa-seedling text-5xl mb-4 block"></i>
                <p class="text-xl font-medium" data-i18n="no_results">Aucun résultat trouvé</p>
            </div>`;
        if (countEl) countEl.textContent = '0';
        return;
    }

    const lang = getCurrentLang();

    grid.innerHTML = plantesToRender.map(p => {
        const imgSrc = p.image || placeholderSVG;
        const nomCommun = (p.nomCommun && p.nomCommun[lang]) || p.nomCreole || '';
        const nomFr = p.nomFrancais || '';
        const usageType = p.usageType || 'Médicinale';
        const maladies = p.maladieSummary || '';

        // Toxicity
        const toxColor = p.toxBadgeColor || 'green';
        const toxText = p.toxBadgeText || 'Non toxique';
        const toxCls = { green:'tox-safe', yellow:'tox-caution', orange:'tox-caution', red:'tox-danger' };

        return `
        <div class="plant-card" onclick="window.location='plante.html?id=${p.plantId}'">
            <div class="h-48">
                <img src="${imgSrc}" alt="${p.nomScientifique}"
                     loading="lazy"
                     onerror="this.onerror=null;this.src='${placeholderSVG}';">
            </div>
            <div class="p-5" style="display:flex;flex-direction:column;flex-grow:1;">
                <h3>${p.nomScientifique}</h3>
                ${nomCommun ? `<p class="text-gray-500" style="margin-bottom:2px;">« ${nomCommun} »</p>` : ''}
                ${nomFr ? `<p style="color:#999;font-size:0.8rem;margin:0 0 8px;">${nomFr}</p>` : ''}
                <p class="text-xs" style="margin-bottom:4px;"><span class="font-bold">Famille :</span> <a href="#" onclick="event.stopPropagation();document.getElementById('filterFamille').value='${(p.famille||'').replace(/'/g,"\\'")}';applyFilters();" style="color:#28a745;text-decoration:none;">${p.famille || ''}</a></p>
                <p class="text-xs" style="margin-bottom:4px;"><span class="font-bold">Usage :</span> ${usageType}</p>
                ${maladies ? `<p class="text-xs" style="margin-bottom:4px;"><span class="font-bold">Maladies :</span> ✅ ${maladies}</p>` : ''}
                <div style="margin:6px 0 8px;">
                    <span class="${toxCls[toxColor] || 'tox-safe'}" style="display:inline-block;font-size:0.7rem;font-weight:600;padding:2px 10px;border-radius:12px;">${toxText}</span>
                </div>
                <div style="margin-top:auto;display:flex;gap:6px;">
                    <a href="plante.html?id=${p.plantId}" onclick="event.stopPropagation();"
                       class="btn-fiche">Fiche</a>
                    <a href="plante.html?id=${p.plantId}#s-description" onclick="event.stopPropagation();"
                       class="btn-desc">Description</a>
                </div>
            </div>
        </div>`;
    }).join('');

    if (countEl) countEl.textContent = plantesToRender.length;
}

// ---- Filtres -----------------------------------------------

function applyFilters() {
    if (typeof plantesData === 'undefined') return;

    const lang       = getCurrentLang();
    const search     = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const famille    = document.getElementById('filterFamille')?.value || '';
    const systeme    = document.getElementById('filterSysteme')?.value || '';
    const maladie    = document.getElementById('filterMaladie')?.value || '';

    const filtered = plantesData.filter(p => {
        const nom        = (p.nomScientifique || '').toLowerCase();
        const commun     = ((p.nomCommun && p.nomCommun[lang]) || '').toLowerCase();
        const matchSearch  = !search || nom.includes(search) || commun.includes(search);

        const plantFamille = (p.famille || '').toLowerCase();
        const matchFamille = !famille || plantFamille === famille.toLowerCase();

        const plantSysteme = (p.systeme && p.systeme[lang]) ? p.systeme[lang].toLowerCase() : '';
        const matchSysteme = !systeme || plantSysteme.includes(systeme.toLowerCase());

        const plantMaladie = (p.maladie && p.maladie[lang]) ? p.maladie[lang].toLowerCase() : '';
        const matchMaladie = !maladie || plantMaladie.includes(maladie.toLowerCase());

        return matchSearch && matchFamille && matchSysteme && matchMaladie;
    });

    renderPlantes(filtered);
}

function resetFilters() {
    const searchInput   = document.getElementById('searchInput');
    const filterFamille = document.getElementById('filterFamille');
    const filterSysteme = document.getElementById('filterSysteme');
    const filterMaladie = document.getElementById('filterMaladie');

    if (searchInput)   searchInput.value   = '';
    if (filterFamille) filterFamille.value = '';
    if (filterSysteme) filterSysteme.value = '';
    if (filterMaladie) filterMaladie.value = '';

    if (typeof plantesData !== 'undefined') {
        renderPlantes(plantesData);
    }
}

// ---- Modal détail plante (Fiche Technique) ----------------

function showPlantDetails(id) {
    if (typeof plantesData === 'undefined') return;
    const p = plantesData.find(x => x.id === id);
    if (!p) return;

    const lang = getCurrentLang();
    const modal = document.getElementById('plantModal');
    const content = document.getElementById('modalContent');
    if (!modal || !content) return;

    const label = (fr, en, ht) => lang === 'fr' ? fr : lang === 'en' ? en : ht;

    // Helper to safely get translated text from sections
    const getSectionText = (section) => {
        if (!section) return '';
        if (typeof section === 'string') return section;
        if (typeof section === 'object') {
            return section[lang] || section.fr || section.en || '';
        }
        return '';
    };

    // Build section tabs
    const sections = p.sections || {};

    // Tab 1: Botanique
    const botaniqueTabs = `
        <div class="space-y-4">
            ${sections.introduction ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">Introduction</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.introduction)}</p>
                </div>
            ` : ''}
            ${sections.description ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Description botanique', 'Botanical description', 'Deskripsyon botanik')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.description)}</p>
                </div>
            ` : ''}
            ${sections.molecules ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Molécules et rôles', 'Molecules and roles', 'Molekil ak wòl')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.molecules)}</p>
                </div>
            ` : ''}
            ${sections.ecologie ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Écologie', 'Ecology', 'Ekoloji')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.ecologie)}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Tab 2: Usages
    const usagesTabs = `
        <div class="space-y-4">
            ${sections.usages ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Usages ethnobotaniques', 'Ethnobotanical uses', 'Itilizasyon etnobotan')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.usages)}</p>
                </div>
            ` : ''}
            ${sections.systemes ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Systèmes concernés et mécanismes', 'Affected systems and mechanisms', 'Sistèm yo ak mekanismo')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.systemes)}</p>
                </div>
            ` : ''}
            ${sections.posologie ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Posologie', 'Dosage', 'Dòz')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.posologie)}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Tab 3: Sécurité
    const securiteTabs = `
        <div class="space-y-4">
            ${sections.toxicite ? `
                <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 class="font-bold text-red-700 mb-2">
                        <i class="fa-solid fa-triangle-exclamation mr-1"></i>${label('Toxicité et précautions', 'Toxicity and precautions', 'Toksisité ak prekosyon')}
                    </h4>
                    <p class="text-sm text-red-700 leading-relaxed">${getSectionText(sections.toxicite)}</p>
                </div>
            ` : ''}
            ${sections.menaces ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Menaces et conservation', 'Threats and conservation', 'Menas ak konsèvasyon')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.menaces)}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Tab 4: Économie
    const economieTabs = `
        <div class="space-y-4">
            ${sections.valeur ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Valeur économique', 'Economic value', 'Valè ekonomik')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.valeur)}</p>
                </div>
            ` : ''}
            ${sections.recherches ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Recherches et perspectives', 'Research and prospects', 'Rechèch ak pèspektiv')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.recherches)}</p>
                </div>
            ` : ''}
            ${sections.references ? `
                <div>
                    <h4 class="font-bold text-[#2c5e3b] mb-2">${label('Références', 'References', 'Referans')}</h4>
                    <p class="text-sm text-gray-700 leading-relaxed">${getSectionText(sections.references)}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Tab 5: Résumé
    const resumeTabs = `
        <div>
            ${sections.aRetenir ? `
                <div class="p-4 bg-[#e8f5e9] border border-[#2c5e3b]/20 rounded-lg">
                    <h4 class="font-bold text-[#2c5e3b] mb-2">
                        <i class="fa-solid fa-star mr-1"></i>${label('À retenir', 'Key points', 'Pwen kle yo')}
                    </h4>
                    <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line">${getSectionText(sections.aRetenir)}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Build common names
    const commonNames = `
        ${p.nomFrancais || p.nomCommun?.[lang] ? `<p><span class="text-[#c5a059] font-semibold">${label('Français:', 'French:', 'Frè:')} </span>${p.nomFrancais || p.nomCommun?.[lang] || ''}</p>` : ''}
        ${p.nomAnglais ? `<p><span class="text-[#c5a059] font-semibold">${label('Anglais:', 'English:', 'Anglè:')} </span>${p.nomAnglais}</p>` : ''}
        ${p.nomCreole ? `<p><span class="text-[#c5a059] font-semibold">${label('Créole:', 'Creole:', 'Kreyòl:')} </span>${p.nomCreole}</p>` : ''}
        ${p.synonymes ? `<p><span class="text-gray-500 text-xs">${label('Synonymes:', 'Synonyms:', 'Sinonin:')} </span><span class="text-gray-600 text-xs italic">${p.synonymes}</span></p>` : ''}
    `;

    // Build hero image and gallery
    const images = p.images || (p.image ? [p.image] : []);
    const heroImage = images[0] || placeholderSVG;
    const galleryThumbs = images.slice(0, 5).map((img, idx) =>
        `<img src="${img}" alt="Image ${idx + 1}" class="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity" onclick="changeHeroImage('${img.replace(/'/g, "\\'")}')">`
    ).join('');

    // Build modal HTML
    content.innerHTML = `
        <div class="flex flex-col h-full max-h-[90vh] bg-white rounded-xl overflow-hidden">
            <!-- Header with hero image -->
            <div class="relative bg-gray-900">
                <img id="heroImage" src="${heroImage}" alt="${p.nomScientifique}" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='${placeholderSVG}'">
                <button onclick="window.closeModal()" class="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button onclick="window.printPlantFiche()" class="absolute top-4 right-16 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10 hidden md:flex">
                    <i class="fa-solid fa-print"></i>
                </button>
                ${galleryThumbs ? `
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex gap-2 overflow-x-auto">
                        ${galleryThumbs}
                    </div>
                ` : ''}
            </div>

            <!-- Plant info header -->
            <div class="px-6 pt-4 pb-2 border-b border-gray-200 bg-white">
                <div class="flex items-start justify-between mb-2">
                    <div class="flex-grow">
                        <span class="inline-block bg-[#e8f5e9] text-[#2c5e3b] text-xs font-bold px-3 py-1 rounded-full mb-2">
                            ${p.famille || ''} ${p.familleDescription ? `<span class="text-xs font-normal ml-1">(${p.familleDescription})</span>` : ''}
                        </span>
                    </div>
                </div>
                <h2 class="text-2xl font-black italic text-gray-800 mb-1">${p.nomScientifique}</h2>
                ${p.genre || p.espece ? `<p class="text-xs text-gray-500 mb-2"><span class="font-semibold">Genus:</span> ${p.genre || ''} <span class="font-semibold ml-2">Species:</span> ${p.espece || ''}</p>` : ''}
                <div class="text-sm leading-relaxed text-gray-700">
                    ${commonNames}
                </div>
            </div>

            <!-- Tabbed content -->
            <div class="flex-grow overflow-hidden flex flex-col">
                <!-- Tab buttons -->
                <div class="flex gap-1 px-6 pt-4 bg-white border-b border-gray-200 overflow-x-auto">
                    <button class="tab-btn active px-4 py-2 text-sm font-semibold text-[#2c5e3b] border-b-2 border-[#2c5e3b] whitespace-nowrap pb-2" data-tab="botanique">
                        ${label('Botanique', 'Botany', 'Botanik')}
                    </button>
                    <button class="tab-btn px-4 py-2 text-sm font-semibold text-gray-600 border-b-2 border-transparent whitespace-nowrap pb-2 hover:text-[#2c5e3b]" data-tab="usages">
                        ${label('Usages', 'Uses', 'Itilizasyon')}
                    </button>
                    <button class="tab-btn px-4 py-2 text-sm font-semibold text-gray-600 border-b-2 border-transparent whitespace-nowrap pb-2 hover:text-[#2c5e3b]" data-tab="securite">
                        ${label('Sécurité', 'Safety', 'Sekirite')}
                    </button>
                    <button class="tab-btn px-4 py-2 text-sm font-semibold text-gray-600 border-b-2 border-transparent whitespace-nowrap pb-2 hover:text-[#2c5e3b]" data-tab="economie">
                        ${label('Économie', 'Economy', 'Ekonomi')}
                    </button>
                    <button class="tab-btn px-4 py-2 text-sm font-semibold text-gray-600 border-b-2 border-transparent whitespace-nowrap pb-2 hover:text-[#2c5e3b]" data-tab="resume">
                        ${label('Résumé', 'Summary', 'Rezime')}
                    </button>
                </div>

                <!-- Tab content -->
                <div class="flex-grow overflow-y-auto px-6 py-4 bg-white">
                    <div class="tab-content active" data-content="botanique">${botaniqueTabs}</div>
                    <div class="tab-content" data-content="usages">${usagesTabs}</div>
                    <div class="tab-content" data-content="securite">${securiteTabs}</div>
                    <div class="tab-content" data-content="economie">${economieTabs}</div>
                    <div class="tab-content" data-content="resume">${resumeTabs}</div>
                </div>
            </div>
        </div>
    `;

    // Attach tab event listeners
    const tabBtns = content.querySelectorAll('.tab-btn');
    const tabContents = content.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');

            // Update active button
            tabBtns.forEach(b => {
                b.classList.remove('active', 'border-[#2c5e3b]', 'text-[#2c5e3b]');
                b.classList.add('text-gray-600', 'border-transparent');
            });
            btn.classList.add('active', 'border-[#2c5e3b]', 'text-[#2c5e3b]');
            btn.classList.remove('text-gray-600', 'border-transparent');

            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            content.querySelector(`[data-content="${tabName}"]`).classList.add('active');
        });
    });

    // Store plant data for printing
    window.currentPlant = p;
    window.currentLangForPrint = lang;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Helper function to change hero image
function changeHeroImage(src) {
    const heroImg = document.getElementById('heroImage');
    if (heroImg) heroImg.src = src;
}

// Print function for plant fiche
function printPlantFiche() {
    if (!window.currentPlant) return;

    const p = window.currentPlant;
    const lang = window.currentLangForPrint || 'fr';
    const label = (fr, en, ht) => lang === 'fr' ? fr : lang === 'en' ? en : ht;
    const getSectionText = (section) => {
        if (!section) return '';
        if (typeof section === 'string') return section;
        if (typeof section === 'object') {
            return section[lang] || section.fr || section.en || '';
        }
        return '';
    };

    const sections = p.sections || {};
    const printWindow = window.open('', '', 'width=800,height=600');

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${p.nomScientifique}</title>
            <style>
                body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 20px; }
                h1 { font-size: 24px; font-style: italic; color: #2c5e3b; margin-bottom: 5px; }
                h2 { font-size: 18px; color: #2c5e3b; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #2c5e3b; padding-bottom: 5px; }
                h3 { font-size: 14px; color: #c5a059; margin-top: 12px; margin-bottom: 8px; }
                p { margin: 8px 0; }
                .header { margin-bottom: 30px; }
                .family { background: #e8f5e9; padding: 10px; border-radius: 5px; margin: 10px 0; font-weight: bold; color: #2c5e3b; }
                .warning { background: #ffebee; border-left: 4px solid #c62828; padding: 15px; margin: 20px 0; }
                .summary-box { background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; }
                @media print { body { margin: 0; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${p.nomScientifique}</h1>
                <div class="family">${p.famille || ''}</div>
                <h3>${label('Noms communs', 'Common names', 'Non yo komèn')}:</h3>
                <p>
                    ${p.nomFrancais || p.nomCommun?.[lang] ? `<strong>${label('Français:', 'French:', 'Frè:')}</strong> ${p.nomFrancais || p.nomCommun?.[lang] || ''}` : ''}
                    ${p.nomAnglais ? `<br><strong>${label('Anglais:', 'English:', 'Anglè:')}</strong> ${p.nomAnglais}` : ''}
                    ${p.nomCreole ? `<br><strong>${label('Créole:', 'Creole:', 'Kreyòl:')}</strong> ${p.nomCreole}` : ''}
                </p>
            </div>

            ${sections.introduction ? `<h2>${label('Introduction', 'Introduction', 'Entwodiksyon')}</h2><p>${getSectionText(sections.introduction)}</p>` : ''}
            ${sections.description ? `<h2>${label('Description botanique', 'Botanical description', 'Deskripsyon botanik')}</h2><p>${getSectionText(sections.description)}</p>` : ''}
            ${sections.molecules ? `<h2>${label('Molécules et rôles', 'Molecules and roles', 'Molekil ak wòl')}</h2><p>${getSectionText(sections.molecules)}</p>` : ''}
            ${sections.ecologie ? `<h2>${label('Écologie', 'Ecology', 'Ekoloji')}</h2><p>${getSectionText(sections.ecologie)}</p>` : ''}
            ${sections.usages ? `<h2>${label('Usages ethnobotaniques', 'Ethnobotanical uses', 'Itilizasyon etnobotan')}</h2><p>${getSectionText(sections.usages)}</p>` : ''}
            ${sections.systemes ? `<h2>${label('Systèmes concernés', 'Affected systems', 'Sistèm yo')}</h2><p>${getSectionText(sections.systemes)}</p>` : ''}
            ${sections.posologie ? `<h2>${label('Posologie', 'Dosage', 'Dòz')}</h2><p>${getSectionText(sections.posologie)}</p>` : ''}
            ${sections.toxicite ? `<div class="warning"><h2>${label('Toxicité et précautions', 'Toxicity and precautions', 'Toksisité ak prekosyon')}</h2><p>${getSectionText(sections.toxicite)}</p></div>` : ''}
            ${sections.menaces ? `<h2>${label('Menaces et conservation', 'Threats and conservation', 'Menas ak konsèvasyon')}</h2><p>${getSectionText(sections.menaces)}</p>` : ''}
            ${sections.valeur ? `<h2>${label('Valeur économique', 'Economic value', 'Valè ekonomik')}</h2><p>${getSectionText(sections.valeur)}</p>` : ''}
            ${sections.recherches ? `<h2>${label('Recherches et perspectives', 'Research and prospects', 'Rechèch ak pèspektiv')}</h2><p>${getSectionText(sections.recherches)}</p>` : ''}
            ${sections.references ? `<h2>${label('Références', 'References', 'Referans')}</h2><p>${getSectionText(sections.references)}</p>` : ''}
            ${sections.aRetenir ? `<div class="summary-box"><h2>${label('À retenir', 'Key points', 'Pwen kle yo')}</h2><p>${getSectionText(sections.aRetenir)}</p></div>` : ''}

            <script>
                window.print();
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
}

function closeModal() {
    const modal = document.getElementById('plantModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Fermer la modal en cliquant hors du contenu
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('plantModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Fermer avec Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ---- Menu mobile ----------------------------------------
    const mobileBtn  = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Fermer si on clique sur un lien
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // ---- Chargement initial de la grille --------------------
    if (document.getElementById('resultatsGrid') && typeof plantesData !== 'undefined') {
        renderPlantes(plantesData);
        // Attacher les filtres
        document.getElementById('searchInput')?.addEventListener('input', applyFilters);
        document.getElementById('filterFamille')?.addEventListener('change', applyFilters);
        document.getElementById('filterSysteme')?.addEventListener('change', applyFilters);
        document.getElementById('filterMaladie')?.addEventListener('change', applyFilters);
    }
});

// Exposer globalement pour les onclick inline
window.showPlantDetails = showPlantDetails;
window.closeModal       = closeModal;
window.resetFilters     = resetFilters;
window.changeHeroImage  = changeHeroImage;
window.printPlantFiche  = printPlantFiche;
