// ============================================================
// translations.js — Dictionnaire i18n FR / EN / HT
// ============================================================

const i18n = {
    fr: {
        hero_tag:       "50 Plantes Documentées",
        hero_title:     "Atlas des Plantes du Grand Sud",
        hero_subtitle:  "Documentation, conservation et valorisation de la biodiversité",
        hero_desc:      "Explorez la richesse de la flore médicinale, aromatique et nutritionnelle du Grand Sud.",
        nav_home:       "Accueil",
        nav_data:       "Base de données",
        nav_val:        "Valorisation",
        nav_cons:       "Conservation",
        nav_res:        "Ressources",
        search_ph:      "Rechercher une plante...",
        opt_fam:        "Toutes les familles",
        opt_sys:        "Tous les systèmes",
        opt_sys_ner:    "Nerveux",
        opt_sys_dig:    "Digestif",
        opt_sys_card:   "Cardiovasculaire",
        opt_sys_res:    "Respiratoire",
        opt_sys_imm:    "Immunitaire",
        opt_mal:        "Toutes les maladies",
        opt_mal_dia:    "Diabète",
        opt_mal_hyp:    "Hypertension",
        opt_mal_mal:    "Paludisme",
        opt_mal_inf:    "Infections",
        btn_reset:      "Réinitialiser",
        res_title:      "🌿 Plantes Médicinales",
        no_results:     "Aucun résultat trouvé",
        warning:        "AVERTISSEMENT : Cet atlas n'est pas un guide d'automédication. Consultez toujours un professionnel de santé.",
        footer_copy:    "© 2026 Atlas Botanique d'Haïti. Tous droits réservés."
    },
    en: {
        hero_tag:       "50 Documented Plants",
        hero_title:     "Plant Atlas of Southern Haiti",
        hero_subtitle:  "Documentation, conservation and valorization of biodiversity",
        hero_desc:      "Explore the richness of medicinal, aromatic and nutritional flora of the Grand Sud.",
        nav_home:       "Home",
        nav_data:       "Database",
        nav_val:        "Valorization",
        nav_cons:       "Conservation",
        nav_res:        "Resources",
        search_ph:      "Search for a plant...",
        opt_fam:        "All families",
        opt_sys:        "All systems",
        opt_sys_ner:    "Nervous",
        opt_sys_dig:    "Digestive",
        opt_sys_card:   "Cardiovascular",
        opt_sys_res:    "Respiratory",
        opt_sys_imm:    "Immune",
        opt_mal:        "All diseases",
        opt_mal_dia:    "Diabetes",
        opt_mal_hyp:    "Hypertension",
        opt_mal_mal:    "Malaria",
        opt_mal_inf:    "Infections",
        btn_reset:      "Reset",
        res_title:      "🌿 Medicinal Plants",
        no_results:     "No results found",
        warning:        "WARNING: This atlas is not a self-medication guide. Always consult a healthcare professional.",
        footer_copy:    "© 2026 Botanical Atlas of Haiti. All rights reserved."
    },
    ht: {
        hero_tag:       "50 Plant Dokimante",
        hero_title:     "Atla Plant Gran Sid Ayiti",
        hero_subtitle:  "Dokimantasyon, konsèvasyon ak valorizasyon divèsite byolojik",
        hero_desc:      "Eksplore richès flò medisinale, aromatik ak nitritif Gran Sid la.",
        nav_home:       "Akèy",
        nav_data:       "Baz done",
        nav_val:        "Valorizasyon",
        nav_cons:       "Konsèvasyon",
        nav_res:        "Resous",
        search_ph:      "Chèche yon plant...",
        opt_fam:        "Tout fanmi",
        opt_sys:        "Tout sistèm",
        opt_sys_ner:    "Nève",
        opt_sys_dig:    "Dijestif",
        opt_sys_card:   "Kadyovaskilè",
        opt_sys_res:    "Respiratwa",
        opt_sys_imm:    "Iminitè",
        opt_mal:        "Tout maladi",
        opt_mal_dia:    "Dyabèt",
        opt_mal_hyp:    "Tansyon",
        opt_mal_mal:    "Malaria",
        opt_mal_inf:    "Enfeksyon",
        btn_reset:      "Reyinisyalize",
        res_title:      "🌿 Plant Medisinale",
        no_results:     "Pa gen rezilta",
        warning:        "AVÈTISMAN : Atla sa a pa yon gid pou pran medikaman pou kont ou. Toujou konsilte yon pwofesyonèl sante.",
        footer_copy:    "© 2026 Atla Botanik Ayiti. Tout dwa rezève."
    }
};

// ---- Variable langue globale --------------------------------
window.currentLang = 'fr';

function applyTranslations(lang) {
    window.currentLang = lang;
    const texts = i18n[lang];
    if (!texts) return;

    // 1. Mettre à jour le texte des éléments data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key] !== undefined) {
            el.textContent = texts[key];
        }
    });

    // 2. Mettre à jour les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (texts[key] !== undefined) {
            el.placeholder = texts[key];
        }
    });

    // 3. Style du bouton de langue actif (desktop)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.remove('hover:bg-[#c5a059]/20');
        } else {
            btn.classList.remove('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.add('hover:bg-[#c5a059]/20');
        }
    });

    // 4. Synchroniser le select mobile
    const mobileSelect = document.getElementById('mobileLang');
    if (mobileSelect) mobileSelect.value = lang;

    // 5. Rafraîchir la grille avec la nouvelle langue si elle existe
    if (document.getElementById('resultatsGrid') && typeof plantesData !== 'undefined') {
        if (typeof renderPlantes === 'function') {
            if (typeof applyFilters === 'function') {
                applyFilters();
            } else {
                renderPlantes(plantesData);
            }
        }
    }
}

// Appliquer la langue par défaut au chargement
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(window.currentLang);
});
